<template>
  <Containers classname="flex w-full lg:space-x-3">
    <Button
      v-for="(interval, index) in DashboardConfig.chartIntervals"
      :key="index"
      class="lg:w-full hover:bg-primary-100 !py-2"
      variant="outlined"
    >
      <Text class="text-center text-black text-xs lg:text-base">{{ interval.label }}</Text>
    </Button>
  </Containers>
</template>

<script setup lang="ts">
import Containers from "~/components/Containers/Containers.vue";
import Button from "~/components/Buttons/Button.vue";
import DashboardConfig from "../config";
import Text from "~/components/Typography/Text.vue";
</script>
