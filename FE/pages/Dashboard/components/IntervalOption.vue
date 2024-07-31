<template>
  <Containers classname="flex w-full lg:space-x-3">
    <Button
      v-for="(interval, index) in DashboardConfig.chartIntervals"
      :key="index"
      class="lg:w-full hover:bg-primary-100 !py-2"
      variant="outlined"
      :class="{ '!bg-primary-500': currentInterval === index }"
      @click="handleOnClick(interval.value, index)"
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
import { useState } from "~/composables/useGeneralState";
import { useSharedState } from "~/composables/useSharedState";
import { useStore } from "~/composables/useStore";

const [currentInterval, setCurrentInterval] = useState(0);
const { setSharedValue } = useSharedState();
const store = useStore();

const handleOnClick = (interval: string, index: number) => {
  setCurrentInterval(index);
  setSharedValue(interval);
  store.setValue(interval);
};
</script>
