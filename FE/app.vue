<template>
  <header class="bg-primary-200 py-2 flex justify-between items-center px-5 w-full overflow-hidden">
    <Containers classname=" space-x-5 lg:flex ">
      <Text class="text-xs lg:text-base" @click="loginUser">MICHAEL MC2</Text>
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

  <Modal :close="signUpModal.close" :is-open="signUpModal.isOpen.value" :open="signUpModal.open">
    <Containers class="px-2 py-2 mx-2">
      <Text class="text-center">IT'S FREE! Track your favorite coin easily!</Text>
      <Text class="text-center">Sign Up Now!</Text>
    </Containers>
  </Modal>
  <NuxtPage />
</template>

<script lang="ts" setup>
import Button from "~/components/Buttons/Button.vue";
import { useOpenClose } from "./composables/useOpenClose";
import Containers from "./components/Containers/Containers.vue";
import Modal from "~/components/Modal/Modal.vue";
import Text from "./components/Typography/Text.vue";
import { useNuxtApp } from "#app"; // Import useNuxtApp to access Nuxt app context
import { useState } from "~/composables/useState";

const { $axios } = useNuxtApp();

const signUpModal = useOpenClose();
const loginModal = useOpenClose();
const registerState = useState({ email: "", fullname: "", password: "" });

const [loginCredentials, setLoginCredentials] = useState({ email: "", password: "" });

console.log(loginCredentials.value, "loginCredentials");

const registerUser = async () => {
  try {
    const response = await $axios.post("/register", {
      email: "test2",
      fullname: "test2",
      password: "test2",
    });
    console.log(response, "response");
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

const loginUser = async () => {
  try {
    const response = await $axios.post("/login", {
      email: "test2",
      password: "test2",
    });
    console.log(response.data, "response");
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

watch(
  () => signUpModal.isOpen.value,
  () => {},
);

watch(
  () => loginModal.isOpen.value,
  () => {},
);
</script>
