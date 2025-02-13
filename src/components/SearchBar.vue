<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  filterValue: {
    type: String,
    default: "",
  },
});

// events to emit updated values back to the parent
const emit = defineEmits(["update:modelValue", "update:filterValue"]);

const onInput = (event) => {
  emit("update:modelValue", event.target.value);
};

const selectFilter = (value) => {
  if (props.filterValue === value) {
    value = "";
  }
  emit("update:filterValue", value);
};
</script>
<template>
  <div class="w-full max-w-2xl mx-auto mb-8">
    <!-- Search Input -->
    <div class="relative">
      <input
        type="text"
        :value="modelValue"
        @input="onInput"
        placeholder="Search jobs..."
        class="w-full border border-gray-300 rounded-full py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <i
        class="pi pi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      ></i>
    </div>
    <!-- Filter Buttons -->
    <div class="flex justify-center mt-6 space-x-4">
      <button
        :class="[
          'border border-green-500 py-2 px-4 rounded-full transition duration-300 ease-in-out',
          filterValue === 'Full Time'
            ? 'bg-green-500 text-white'
            : 'bg-white text-green-500',
        ]"
        @click="selectFilter('Full Time')"
      >
        Full Time
      </button>
      <button
        :class="[
          'border border-green-500 py-2 px-4 rounded-full transition duration-300 ease-in-out',
          filterValue === 'Part Time'
            ? 'bg-green-500 text-white'
            : 'bg-white text-green-500',
        ]"
        @click="selectFilter('Part Time')"
      >
        Part Time
      </button>
    </div>
  </div>
</template>
