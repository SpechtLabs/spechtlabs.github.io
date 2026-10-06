import type { Plugin } from "vuepress";

// Fetches org repos and contributors from the GitHub API at build time and
// exposes them to client components as `@temp/github-data.js`.
//
// Doing this in the browser burns through the unauthenticated rate limit
// (60 requests/hour per IP) after a couple of page loads, since the
// contributor list needs one request per repository.

export interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export interface Project {
  name: string;
  homepage: string;
  html_url: string;
  description: string;
  topics: string[];
  stargazers_count: number;
  created_at: string;
}

export interface OrgData {
  projects: Project[];
  // Contributors across all non-fork repos plus public org members
  contributors: Contributor[];
  // Contributors per repository
  repoContributors: Record<string, Contributor[]>;
}

export interface GitHubData {
  orgs: Record<string, OrgData>;
  error?: string;
}

const perPage = 100;

function headers(): Record<string, string> {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  return {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

// Fetch every page of a paginated GitHub list endpoint
async function fetchAllPages(path: string): Promise<any[]> {
  const items: any[] = [];
  for (let page = 1; ; page++) {
    const sep = path.includes("?") ? "&" : "?";
    const res = await fetch(
      `https://api.github.com/${path}${sep}per_page=${perPage}&page=${page}`,
      { headers: headers() },
    );
    if (!res.ok) {
      throw new Error(`GET ${path}: ${res.status} ${res.statusText}`);
    }
    // Empty repositories respond with 204 No Content
    if (res.status === 204) break;
    const pageItems = await res.json();
    items.push(...pageItems);
    if (pageItems.length < perPage) break;
  }
  return items;
}

// Merge contributor lists, dropping bots and summing contributions per user
function aggregateContributors(lists: any[][]): Contributor[] {
  const byLogin = new Map<string, Contributor>();
  for (const c of lists.flat()) {
    if (c.type !== "User") continue;
    const existing = byLogin.get(c.login);
    if (existing) {
      existing.contributions += c.contributions ?? 0;
    } else {
      byLogin.set(c.login, {
        login: c.login,
        avatar_url: c.avatar_url,
        html_url: c.html_url,
        contributions: c.contributions ?? 0,
      });
    }
  }
  return Array.from(byLogin.values()).sort(
    (a, b) => b.contributions - a.contributions,
  );
}

async function fetchOrgData(org: string): Promise<OrgData> {
  // An authenticated token from an org member also sees private (and
  // internal) repos. Only public ones may be listed, so ask for public repos
  // and check the visibility of each again, in case the API filter changes.
  const repos = (await fetchAllPages(`orgs/${org}/repos?type=public`)).filter(
    (repo: any) => repo.visibility === "public" && !repo.private,
  );
  const mainRepoName = `${org.toLowerCase()}.github.io`;

  const projects = repos
    .filter(
      (repo: any) =>
        repo.homepage && repo.name.toLowerCase() !== mainRepoName,
    )
    .map((repo: any) => ({
      name: repo.name,
      homepage: repo.homepage,
      html_url: repo.html_url,
      description: repo.description,
      topics: repo.topics || [],
      stargazers_count: repo.stargazers_count,
      created_at: repo.created_at,
    }))
    // Newest projects first
    .sort(
      (a: Project, b: Project) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );

  // Forks are skipped, as they list the upstream project's contributors
  const ownRepos = repos.filter((repo: any) => !repo.fork);
  const [members, ...perRepo] = await Promise.all([
    fetchAllPages(`orgs/${org}/public_members`),
    ...ownRepos.map((repo: any) =>
      fetchAllPages(`repos/${org}/${repo.name}/contributors`),
    ),
  ]);

  const repoContributors: Record<string, Contributor[]> = {};
  ownRepos.forEach((repo: any, i: number) => {
    repoContributors[repo.name] = aggregateContributors([perRepo[i]]);
  });

  return {
    projects,
    // Public members may not have committed code themselves, so include them
    contributors: aggregateContributors([...perRepo, members]),
    repoContributors,
  };
}

export const githubDataPlugin = ({ orgs }: { orgs: string[] }): Plugin => ({
  name: "github-data",

  onPrepared: async (app) => {
    const data: GitHubData = { orgs: {} };
    try {
      for (const org of orgs) {
        data.orgs[org] = await fetchOrgData(org);
      }
    } catch (err: any) {
      // Don't ship a site with empty sections from CI; locally, keep going
      if (process.env.CI) throw err;
      console.warn(
        `[github-data] ${err.message}. Set GITHUB_TOKEN to avoid rate limits.`,
      );
      data.error = err.message;
    }

    await app.writeTemp(
      "github-data.js",
      `export default ${JSON.stringify(data)}\n`,
    );
  },
});
