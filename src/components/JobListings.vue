<script setup>
import { RouterLink } from "vue-router";
import JobListing from "./JobListing.vue";
import SearchBar from "./SearchBar.vue";
import { reactive, defineProps, onMounted, ref, watch } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios";

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
  showSearch: {
    type: Boolean,
    default: false,
  },
});

const searchQuery = ref("");
const filterValue = ref("");
const state = reactive({
  jobs: [],
  isLoading: true,
});
// Store the original data separately
const allJobs = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("/api/jobs");
    state.jobs = response.data;
    allJobs.value = response.data;
  } catch (error) {
    console.error("Error fetching jobs", error);
  } finally {
    state.isLoading = false;
  }
});

// Watch the searchQuery outside onMounted so it's always active
// watch([searchQuery, filterValue], ([newValue, newFilter]) => {
//   const trimmedQuery = newValue.trim();
//   // console.log("Jobs Data: ", state.jobs);
//   // console.log("Search Query updated:", trimmedQuery);
//   console.log("Filter Value: ", newFilter);
//   if (newFilter) {
//     state.jobs = allJobs.value.filter((job) =>
//       job.type.toLowerCase().includes(newFilter.toLowerCase())
//     );
//     console.log("Filtered Jobs: ", state.jobs);
//   }

//   if (trimmedQuery.length > 0) {
//     // Filter from the original job list
//     state.jobs = allJobs.value.filter((job) =>
//       job.title.toLowerCase().includes(trimmedQuery.toLowerCase())
//     );
//   } else {
//     // If the search query is empty, restore all jobs
//     state.jobs = allJobs.value;
//   }
// });

function updateFilter(filterType) {
  filterValue.value = filterType;
}

watch([searchQuery, filterValue], ([newSearch, newFilter]) => {
  const trimmedQuery = newSearch.trim();

  let filteredJobs = allJobs.value;
  if (newFilter) {
    filteredJobs = filteredJobs.filter((job) =>
      job.type.toLowerCase().includes(newFilter.toLowerCase())
    );
  }
  if (trimmedQuery.length > 0) {
    filteredJobs = filteredJobs.filter((job) =>
      job.title.toLowerCase().includes(trimmedQuery.toLowerCase())
    );
  }
  state.jobs = filteredJobs;
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <!-- This is the Search Bar for Search Jobs -->

      <SearchBar
        v-if="showSearch"
        v-model="searchQuery"
        v-model:filterValue="filterValue"
      />

      <!-- Show loading spinner while loading is true -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>

      <!-- Show job listing when done loading -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
