<template>
  <form @submit.prevent="handleSubmit">
    <div v-for="field in fields" :key="field.name" class="my-4">
      <label :for="field.name">{{ field.label }}</label>
      <input
        v-model="formData[field.name]"
        :type="field.type"
        :placeholder="field.placeholder"
        class="block flex-1 bg-white border border-gray-300 rounded-md py-1.5 px-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed disabled:text-black/30"
      />
    </div>
    <button
      type="submit"
      class="text-center bg-green-400 border-2 border-green-700 rounded-md w-full hover:bg-green-300 py-2"
    >
      {{ submitButtonText }}
    </button>
  </form>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  fields: {
    type: Array,
    required: true,
  },
  onSubmit: {
    type: Function,
    required: true,
  },
  submitButtonText: {
    type: String,
    default: "Submit",
  },
  initialValues: {
    type: Object,
    default: () => ({}),
  },
});

const formData = ref({ ...props.initialValues });

const handleSubmit = () => {
  props.onSubmit(formData.value);
};

watch(
  () => props.initialValues,
  (newValues) => {
    formData.value = { ...newValues };
  },
);
</script>
