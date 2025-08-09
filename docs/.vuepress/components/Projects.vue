<template>
  <h2 class="section_title">Projects</h2>
  <p class="section_description">Built in public. Shared for everyone. Explore the repositories powering my experiments
    and tools.</p>
  <br />
  <div>
    <div v-if="loading" class="loading">Loading projects...</div>
    <div v-else-if="error" class="error">Error: {{ error }}</div>
    <div v-else :style="projectsGridStyles" class="projects-grid">
      <a v-for="project in projects" :key="project.name" class="vp-home-feature" :href="project.homepage"
        target="_blank" rel="noopener noreferrer">
        <article class="box">
          <h2 class="title" v-html="project.name" />
          <p class="details" v-html="project.description" />
          <div class="tags">
            <span v-for="tag in project.topics" :key="tag" class="tag">{{
              tag
              }}</span>
          </div>
          <div class="link-text">
            <p class="link-text-value">
              Visit Homepage <span class="link-text-icon">→</span>
            </p>
          </div>
        </article>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

interface Repo {
  name: string;
  homepage: string;
  description: string;
  topics: string[];
  stargazers_count: number; // Add this field
  created_at: string; // Add this field
}

const props = defineProps<{
  org: string;
}>();

const projects = ref<Repo[]>([]);
const loading = ref(true);
const error = ref("");

const mainRepoName = computed(() => `${props.org.toLowerCase()}.github.io`);

async function fetchProjects() {
  try {
    const response = await fetch(
      `https://api.github.com/orgs/${props.org}/repos`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    const repos = await response.json();

    // Add sorting logic here
    projects.value = repos
      .filter(
        (repo: any) =>
          repo.homepage && repo.name.toLowerCase() !== mainRepoName.value,
      )
      .map((repo: any) => ({
        name: repo.name,
        homepage: repo.homepage,
        description: repo.description,
        topics: repo.topics || [],
        stargazers_count: repo.stargazers_count, // Map the field
        created_at: repo.created_at, // Map the field
      }))
      .sort((a: Repo, b: Repo) => {
        // Sort by stars descending
        if (a.stargazers_count !== b.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        // If stars are equal, sort by creation date descending
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      });
  } catch (err: any) {
    error.value = err.message || "Unknown error";
  } finally {
    loading.value = false;
  }
}

onMounted(fetchProjects);

// --- New Logic for Grid Layout ---
const projectsGridStyles = computed(() => {
  const projectCount = projects.value.length;
  let numColumns;

  if (projectCount === 0) {
    numColumns = 1; // No projects, perhaps just a single column for emptiness
  } else if (projectCount === 1) {
    numColumns = 1;
  } else if (projectCount === 2) {
    numColumns = 2;
  } else if (projectCount === 3) {
    numColumns = 3;
  } else if (projectCount === 4) {
    numColumns = 2; // Specific for 2x2
  } else {
    // For projectCount > 4
    if (projectCount % 4 === 0 || projectCount === 7) {
      numColumns = 4;
    } else if (projectCount % 3 === 0) {
      numColumns = 3;
    } else {
      // Fallback for cases like 5, 10, 11 where 4 columns is desired
      numColumns = 4;
    }
  }

  return {
    display: "grid",
    gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
    gap: "20px",
  };
});
</script>

<style scoped>
.projects-grid {
  /*
  The grid properties (display, grid-template-columns, gap)
  are now dynamically applied via v-bind:style.
  You can remove the `grid-template-columns` and `gap` from here
  if you want them fully controlled by the JS logic.
  Keeping `display: grid;` here as a base is fine,
  but since it's in the dynamic style, it's redundant.
  Let's remove the redundant parts from here for clarity.
  */
}

.loading,
.error {
  text-align: center;
  font-size: 1.2em;
  padding: 20px;
}

.vp-home-feature {
  display: block;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  text-decoration: none;
  transition: border-color var(--vp-t-color), background-color var(--vp-t-color);
  color: inherit;
}

.vp-home-feature:hover {
  border-color: var(--vp-c-brand-1);
}

.box {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: 20px;
  font-size: 24px;
  background-color: var(--vp-c-default-soft);
  border-radius: 6px;
  transition: background-color var(--vp-t-color);
}

.title {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.details {
  flex-grow: 1;
  padding-top: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: var(--vp-c-text-2);
}

.tags {
  margin-top: 8px;
}

.tag {
  display: inline-block;
  background-color: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
  font-size: 12px;
  padding: 2px 6px;
  margin: 2px;
  border-radius: 4px;
}

.link-text {
  padding-top: 8px;
}

.link-text-value {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

.link-text-icon {
  margin-left: 6px;
}

.section_title {
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 20px;
  text-align: center;
  transition: color var(--vp-t-color);
  color: var(--vp-c-text-1);
}

.section_description {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;
  transition: color var(--vp-t-color);
  color: var(--vp-c-text-1);
}
</style>