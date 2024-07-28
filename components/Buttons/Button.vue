<template>
  <div :disbabled="disabled" :class="classNames('p-10 ', variantClassName, classname)"><slot></slot></div>
</template>

<script setup lang="ts">
import { classNameByVariant } from "./helper";

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    variant: "text" | "outlined" | "contained";
    classname?: string;
  }>(),
  {
    variant: "contained",
  },
);

const variantClassName = classNameByVariant(props.variant);
</script>
