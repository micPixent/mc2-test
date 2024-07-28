<template>
  <Listbox v-model="selectedOption">
    <div class="relative">
      <ListboxButton
        class="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg border border-gray-300 focus:outline-none focus-visible:border-primary-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
      >
        {{ selectedOption.label }}
      </ListboxButton>

      <ListboxOptions
        class="absolute z-50 w-full cursor-default overflow-auto text-base py-2 mx-auto bg-primary-50 rounded-md max-h-60"
      >
        <ListboxOption
          v-for="(option, index) in options"
          :key="index"
          :value="option"
          class="hover:bg-primary-300 text-center"
          :class="`${selectedOption.value === option.value && 'bg-primary-600 text-white rounded-sm'}`"
        >
          {{ option.label }}
        </ListboxOption>
      </ListboxOptions>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { IOptions } from "./type";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/vue";

type Props = {
  options: Array<IOptions>;
  disabled?: boolean;
  placeholder?: string;
};

const props = withDefaults(defineProps<Props>(), {
  placeholder: "Select",
});

const selectedOption = ref(props.options[0]);
</script>
