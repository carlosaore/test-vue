<script setup>
import {computed, reactive} from "vue";
import Spinner from "@/components/Spinner.vue";
import {useFetch} from "@vueuse/core";

const manualFetch = reactive({
	loading: false,
	error: null,
	data: null,
	isSuccess: false
});

// compute the first 100 chars of manualFetch.data
const first100Chars = computed(() => {
	if (manualFetch.data) {
		const makeSureItsAString = JSON.stringify(manualFetch.data);
		return makeSureItsAString.substring(0, 100) + "...";
	}
	return "null";
});

const url = "https://pokeapi.co/api/v2/pokemon/ditto";

const fetchManually = async () => {
	manualFetch.loading = true;
	manualFetch.error = null;
	manualFetch.data = null;

	try {
		const response = await fetch(url);
		manualFetch.data = await response.json();
		manualFetch.isSuccess = true;
	} catch (error) {
		manualFetch.error = error;
		manualFetch.isSuccess = false;
		console.error(error);
	} finally {
		manualFetch.loading = false;
	}
};

const handleManualFetch = () => {
	fetchManually();
};

const {
	isFetching: isFetchingWithVueUse,
	isFinished: isFinishedWithVueUse,
	data: dataWithVueUse,
	error: errorWithVueUse,
	execute: executeWithVueUse
} = useFetch(url, {immediate: false}).json();
const handleUseFetch = () => {
	executeWithVueUse();
};

</script>

<template>
    <hr/>
    <section>
        <h2>
            Data Fetcher component
        </h2>
        <p>
            <i>
                This component fetches data from an API and displays it.
            </i>
        </p>
        <p>
            <i>
                The event that triggers the fetch is a button click since this is not showing lazy loading components,
                fetching on route change, or anything like that.
            </i>
        </p>
        <p>
            <i>
                It shows two strategies for fetching data: one using <code>fetch</code> and manually storing stuff and
                handling errors etc. (full pain mode), and the other using <code>useFetch</code> from <a
                    href="https://vueuse.org/core/useFetch/">VueUse</a>.
            </i>
        </p>
        <h3>
            Manual fetch
        </h3>
        <button type="button" @click="handleManualFetch">
            Fetch manually
        </button>
        <div class="flex-wrapper">
            <div class="flex-child">
                <p>
                    <i>
                        loading:
                    </i>
                    <code>
                        {{ manualFetch.loading }}
                    </code>
                </p>
                <p>
                    <i>error</i>:
                    <code>
                        {{ manualFetch.error || 'null' }}
                    </code>
                </p>
                <p>
                    <i>isSuccess</i>:
                    <code>
                        {{ manualFetch.isSuccess }}
                    </code>
                </p>
            </div>
            <div class="results flex-child">
                <p v-if="manualFetch.isSuccess && !manualFetch.loading" class="poke-name">
                    {{ manualFetch.data.name.toUpperCase() }}
                </p>
                <img
                        v-if="manualFetch.isSuccess && !manualFetch.loading"
                        :alt="manualFetch.data.name"
                        :src="manualFetch.data.sprites.front_default"
                />
                <p
                        v-else-if="!manualFetch.loading && !manualFetch.error"
                >
                    Click the button to fetch data.
                </p>
                <Spinner
                        v-else-if="manualFetch.loading && !manualFetch.error"
                />
                <pre
                        v-else-if="manualFetch.error"
                        style="color: red;"
                >
                  {{ manualFetch.error }}
              </pre>
            </div>
        </div>
        <h3>
            useFetch from VueUse
        </h3>
        <p>
            <i>
                This is a much easier way to fetch data. It's a wrapper around <code>fetch</code> that handles all the
                stuff you have to do manually.
            </i>
        </p>
        <button type="button" @click="handleUseFetch">
            Fetch with useFetch
        </button>
        <div class="flex-wrapper">
            <div class="flex-child">
                <p>
                    <i>
                        loading:
                    </i>
                    <code>
                        {{ isFetchingWithVueUse ? 'true' : 'false' }}
                    </code>
                </p>
                <p>
                    <i>error</i>:
                    <code>
                        {{ errorWithVueUse || 'null' }}
                    </code>
                </p>
                <p>
                    <i>isFinished</i>:
                    <code>
                        {{ isFinishedWithVueUse ? 'true' : 'false' }}
                    </code>
                </p>
            </div>
            <div class="results flex-child">
                <p
                        v-if="isFinishedWithVueUse && !errorWithVueUse"
                        class="poke-name"
                >
                    {{ dataWithVueUse.name.toUpperCase() }}
                </p>
                <img
                        v-if="isFinishedWithVueUse && !errorWithVueUse"
                        :alt="dataWithVueUse.name"
                        :src="dataWithVueUse.sprites.front_default"
                />
                <p
                        v-else-if="!isFetchingWithVueUse && !errorWithVueUse"
                >
                    Click the button to fetch data.
                </p>
                <Spinner
                        v-else-if="isFetchingWithVueUse && !errorWithVueUse"
                />
                <pre
                        v-else-if="errorWithVueUse"
                        style="color: red;"
                >
                  {{ errorWithVueUse }}
              </pre>
            </div>
        </div>
    </section>
</template>

<style scoped>
.flex-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1em;
}

.flex-child {
    flex: 1 1;
}


.results {
    background-color: rgba(240, 240, 240, 0.1);
    padding: 1rem;
    border-radius: 0.5rem;
    text-align: center;
}

.poke-name {
    font-weight: bold;
}
</style>