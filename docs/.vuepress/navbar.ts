import { defineNavbarConfig } from 'vuepress-theme-plume';

async function fetchNavbarConfig() {
  const response = await fetch('https://api.github.com/orgs/SpechtLabs/repos', {
    headers: {
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    }
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }

  const repos = await response.json();

  const projectItems = repos
    .filter(repo =>
      repo.homepage &&
      repo.name.toLowerCase() !== 'spechtlabs.github.io'
    )
    .map(repo => ({
      text: repo.name,
      link: repo.homepage
    }));

  return defineNavbarConfig([
    { text: 'Home', link: '/' },
    { text: 'About Me', link: '/about/' },
    {
      text: 'Projects',
      items: projectItems
    }
    // { text: 'Blog', link: '/blog/' },
  ]);
}

// Example usage in a VuePress config file
export const navbar = await fetchNavbarConfig();
