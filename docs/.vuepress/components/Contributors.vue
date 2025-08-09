<template>
    <h2 class="section_title">Contributors</h2>
    <p class="section_description">Your contributions matter. Here's to everyone who's helped bring this to life.</p>
    <br />
    <div>
        <div v-if="loading" class="loading">Loading contributors...</div>
        <div v-else-if="error" class="error">Error: {{ error }}</div>
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
import { computed, onMounted, ref } from 'vue'

interface Contributor {
    login: string
    avatar_url: string
    html_url: string
    contributions: number // This field might not be present for org members, will be 0 if not
    type: string // This field might not be present for org members, will be "User" if not
}

const props = defineProps<{
    org: string
    repo?: string // Repo is still optional
}>()

const contributors = ref<Contributor[]>([]);
const loading = ref(true);
const error = ref('');

const hasContributors = computed(() => !!contributors.value?.length);

const gitHubHeaders = {
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
};

async function fetchContributors() {
    try {
        let apiUrl: string;
        let fetchedData: any[] = []; // Use 'any[]' temporarily for raw fetch response

        if (props.repo) {
            // If repo is provided, fetch contributors for that specific repo
            apiUrl = `https://api.github.com/repos/${props.org}/${props.repo}/contributors`;
            const res = await fetch(apiUrl, { headers: gitHubHeaders });

            if (!res.ok) {
                throw new Error(`Failed to fetch contributors for ${props.org}/${props.repo}: ${res.statusText}`);
            }
            fetchedData = await res.json();

            // For repo contributors, filter out bots and use their contributions count
            const uniqueUsers = Array.from(new Map(
                fetchedData
                    .filter((c: any) => c.type === "User")
                    .map((c: any) => [c.login, c])
            ).values());
            uniqueUsers.sort((a, b) => b.contributions - a.contributions);
            contributors.value = uniqueUsers as Contributor[];

        } else {
            // If NO repo is provided, fetch public members of the organization
            apiUrl = `https://api.github.com/orgs/${props.org}/public_members?per_page=100`; // Added per_page for efficiency, can paginate if needed
            const res = await fetch(apiUrl, { headers: gitHubHeaders });

            if (!res.ok) {
                // Check if it's a 404 for a non-existent org, or other error
                if (res.status === 404) {
                    throw new Error(`Organization '${props.org}' not found or has no public members.`);
                }
                throw new Error(`Failed to fetch public members for ${props.org}: ${res.statusText}`);
            }
            fetchedData = await res.json();

            // For org members, they don't have 'contributions' directly from this endpoint.
            // We'll map them to the Contributor interface. 'contributions' can be 0 or omitted.
            // They are all 'User' type, so no need to filter by type.
            contributors.value = fetchedData.map((member: any) => ({
                login: member.login,
                avatar_url: member.avatar_url,
                html_url: member.html_url,
                contributions: 0, // Default to 0 as this endpoint doesn't provide it
                type: 'User', // Assume all public members are 'User'
            }));
            // No sorting by contributions for org members, as it's not available.
        }

    } catch (err: any) {
        error.value = err.message || 'An unknown error occurred';
        console.error("Fetch error:", err); // Log full error for debugging
    } finally {
        loading.value = false;
    }
}

onMounted(fetchContributors);
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

.loading,
.error,
.no-contributors {
    text-align: center;
    font-size: 1.2em;
    padding: 20px;
    color: var(--vp-c-text-2);
}
</style>