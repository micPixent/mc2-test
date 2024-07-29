<template>
  <div :class="classNames(classname)"><slot></slot></div>
</template>

<script setup lang="ts">
defineProps<{
  classname?: string;
}>();
</script>

<style></style>
