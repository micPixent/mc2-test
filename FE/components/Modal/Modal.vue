<template>
  <Dialog :open="isOpen" class="relative z-50" @close="close">
    <DialogPanel @click="close">
      <div class="fixed inset-0 bg-black/30" aria-hidden="true"></div>

      <Containers class="fixed inset-0 w-screen overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4">
          <DialogPanel class="w-full max-w-sm rounded bg-white"><slot></slot></DialogPanel>
        </div>
      </Containers>
    </DialogPanel>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel } from "@headlessui/vue";
import Containers from "../Containers/Containers.vue";

type Props = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

defineProps<Props>();
</script>
