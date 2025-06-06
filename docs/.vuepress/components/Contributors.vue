<template>
<div v-if="hasContributors">
    <h2 class="title">Contributors</h2>
    <p class="description">Your contributions matter. Here's to everyone who's helped bring this to life.</p>
    <div class="contributors-list">
    <div class="contributor" v-for="contributor in contributors" :key="contributor.login">
        <img
        class="contributor__avatar"
        :src="contributor.avatar_url"
        :alt="'The avatar used by ' + contributor.login"
        width="80"
        height="80"
        />
        <a class="contributor__name" :href="contributor.html_url">{{ contributor.login }} <OutboundLink/></a>
    </div>
    </div>
</div>
</template>




<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

interface Contributor {
    login: string
    avatar_url: string
    html_url: string
    contributions: number
    type: string
}

export default defineComponent({
    props: {
        repo: {
            type: String,
            required: true
        }
    },

    setup(props) {
        const contributors = ref([])
        const error = ref(null)
        const hasContributors = computed(() => !!contributors.value?.length)

        fetch(`https://api.github.com/repos/${props.repo}/contributors`, {
            headers: {
                "Accept": "application/vnd.github.v3+json"
            }
        })
            .then(res => res.json())
            .then((res: Contributor[]) => res)
            .then(contributors => contributors.filter(c => c.type === "User"))
            .then(users => {
                users.sort((a, b) => b.contributions - a.contributions)
                contributors.value = users
            })
            .catch(err => {
                error.value = err
            })

        return {
            contributors,
            hasContributors,
            error
        }
    }
})
</script>

<style scoped>
.contributors-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
}

.contributor {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    margin: 20px;
}

.contributor__avatar {
    border-radius: 50%;
    display: inline-block;
    margin: 5px auto;
}

.contributor__name {
    margin: 5px auto;
}

.title {
    font-size: 28px;
    font-weight: 900;
    margin-bottom: 20px;
    text-align: center;
    transition: color var(--vp-t-color);
    color: var(--vp-c-text-1);
}

.description {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
    text-align: center;
    transition: color var(--vp-t-color);
    color: var(--vp-c-text-1);
}
</style>