<template>
  <header class="bg-purple-500 py-2 flex justify-between items-center px-5">
    <Containers classname="flex space-x-5">
      <Button classname="p-2" @click="loginModal.toggle">Transaction</Button>
    </Containers>
    <Containers classname="flex space-x-3">
      <Button classname="p-2" @click="loginModal.toggle">Login</Button>
      <Button classname="p-2" @click="signUpModal.toggle">Sign Up</Button>
    </Containers>
  </header>

  <Modal :close="signUpModal.close" :is-open="signUpModal.isOpen.value" :open="signUpModal.open">Test</Modal>
  <NuxtPage />
</template>

<script lang="ts" setup>
import Button from "~/components/Buttons/Button.vue";
import { useOpenClose } from "./composables/useOpen/useOpenClose";
import Containers from "./components/Containers/Containers.vue";
import Modal from "~/components/Modal/Modal.vue";

const signUpModal = useOpenClose();
const loginModal = useOpenClose();

watch(
  () => signUpModal.isOpen.value,
  () => {},
);

watch(
  () => loginModal.isOpen.value,
  () => {},
);
</script>
