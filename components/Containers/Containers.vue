<template>
  <div :class="classNames('p-5', classname)"><slot></slot></div>
</template>

<script setup lang="ts">
defineProps<{
  classname?: string;
}>();
</script>

<style></style>
