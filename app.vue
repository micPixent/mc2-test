<template>
  <header class="bg-primary-200 py-2 flex justify-between items-center px-5 w-full overflow-hidden">
    <Containers classname=" space-x-5 lg:flex ">
      <Text class="text-xs lg:text-base">MICHAEL MC2</Text>
    </Containers>
    <Containers classname="flex space-x-5">
      <Button variant="text" classname="p-2" @click="loginModal.toggle">
        <Text class="text-xs lg:text-base">My Transaction</Text>
      </Button>
    </Containers>
    <Containers classname="flex space-x-3">
      <Button classname="px-3 py-1" @click="loginModal.toggle"><Text class="text-xs lg:text-base">Login</Text></Button>
      <Button classname="px-3 py-1" @click="signUpModal.toggle">
        <Text class="text-xs lg:text-base">Sign Up</Text>
      </Button>
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
import Text from "./components/Typography/Text.vue";

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
