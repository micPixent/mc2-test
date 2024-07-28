<template>
  <Containers classname="flex p-2 bg-pink-500">
    <Button
      v-for="(interval, index) in intervals"
      :key="index"
      class="space-x-3 bg-red-300 w-full hover:bg-primary-100"
    >
      <span class="whitespace-nowrap">{{ interval.label }}</span>
    </Button>
  </Containers>
</template>

<script setup lang="ts">
import Containers from "~/components/Containers/Containers.vue";
import Button from "~/components/Buttons/Button.vue";

const intervals = [
  {
    label: "1D",
    valuel: "D",
  },
  {
    label: "1W",
    valuel: "W",
  },
  {
    label: "4H",
    valuel: "240",
  },
  {
    label: "1H",
    valuel: "60",
  },
  {
    label: "30M",
    valuel: "30",
  },
];
</script>
