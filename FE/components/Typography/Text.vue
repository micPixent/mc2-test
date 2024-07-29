<template>
  <p :class="className"><slot></slot></p>
</template>

<script setup lang="ts">
defineProps<{ className?: string }>();
</script>
