<template>
  <Containers classname="flex">
    <Button
      v-for="(interval, index) in DashboardConfig.chartIntervals"
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
import DashboardConfig from "../config";
</script>
