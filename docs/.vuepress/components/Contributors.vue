<template>
    <h2 class="section_title">Contributors</h2>
    <p class="section_description">{{ description }}</p>
    <br />
    <div>
        <div v-if="error" class="error">Error: {{ error }}</div>
        <div v-else-if="hasContributors" class="contributors-grid-container">
            <!-- Apply centering and wrapping styles here -->
            <div class="contributors-grid">
                <div class="contributor" v-for="contributor in contributors" :key="contributor.login">
                    <img class="contributor__avatar" :src="contributor.avatar_url"
                        :alt="'The avatar used by ' + contributor.login" width="80" height="80" />
                    <a class="contributor__name" :href="contributor.html_url" target="_blank" rel="noopener noreferrer">
                        {{ contributor.login }}
                        <OutboundLink />
                    </a>
                </div>
            </div>
        </div>
        <div v-else class="no-contributors">No contributors found.</div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import githubData from '@temp/github-data.js'

const props = defineProps<{
    org: string
    repo?: string // Repo is still optional
}>()

const description = computed(() => props.repo
    ? `Your contributions matter. Here's to everyone who's helped bring ${props.repo} to life.`
    : `Your contributions matter. Here's to everyone who's helped build any of the ${props.org} projects.`);

// Fetched at build time by the github-data plugin
const orgData = computed(() => githubData.orgs[props.org]);

const error = computed(() => {
    if (githubData.error) return githubData.error;
    if (!orgData.value) return `No GitHub data for '${props.org}'. Add it to githubDataPlugin in config.ts.`;
    if (props.repo && !orgData.value.repoContributors[props.repo]) return `No contributors for ${props.org}/${props.repo}.`;
    return '';
});

const contributors = computed(() => {
    if (!orgData.value) return [];
    return props.repo
        ? orgData.value.repoContributors[props.repo] ?? []
        : orgData.value.contributors;
});

const hasContributors = computed(() => !!contributors.value.length);
</script>

<style scoped>
/* Container for centering the grid */
.contributors-grid-container {
    display: flex;
    justify-content: center; /* Centers the grid horizontally */
    width: 100%; /* Ensures it takes full width to allow centering */
}

/* Flexbox for the actual contributors list */
.contributors-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; /* Allows items to wrap to the next line */
    justify-content: center; /* Centers items on the current line when they wrap */
    gap: 20px; /* Space between contributors */
    max-width: 1200px; /* Optional: limit max width of the grid for large screens */
    padding: 0 10px; /* Optional: Add some padding to prevent items from sticking to edges */
}


.contributor {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centers content within each contributor box */
    text-align: center; /* Centers text below avatar */
    margin: 10px; /* Adjust margin slightly to work with gap on parent */
}

.contributor__avatar {
    border-radius: 50%;
    display: inline-block;
    margin-bottom: 8px; /* Space between avatar and name */
}

.contributor__name {
    font-size: 14px;
    white-space: nowrap; /* Prevent login from wrapping */
    text-decoration: none;
    color: var(--vp-c-text-1); /* Adjust as needed for your theme */
}

.contributor__name:hover {
    color: var(--vp-c-brand-1); /* Adjust hover color */
}

/* Styles for titles, description, loading, error, etc. (mostly unchanged from your original) */
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

.error,
.no-contributors {
    text-align: center;
    font-size: 1.2em;
    padding: 20px;
    color: var(--vp-c-text-2);
}
</style>
