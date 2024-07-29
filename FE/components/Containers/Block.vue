<template>
  <Containers :classname="classNames(classname, 'p-4')"><slot></slot></Containers>
</template>

<script setup lang="ts">
defineProps<{
  classname?: string;
}>();
</script>
