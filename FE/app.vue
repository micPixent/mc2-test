<template>
  <header class="bg-primary-200 py-2 flex justify-between items-center px-5 w-full overflow-hidden">
    <Containers classname=" space-x-5 lg:flex ">
      <Text class="text-xs lg:text-base" @click="loginUser">MICHAEL MC2</Text>
    </Containers>
    <Containers classname="flex space-x-5">
      <Button variant="text" classname="p-2">
        <Text class="text-xs lg:text-base">My Transaction</Text>
      </Button>
    </Containers>
    <Containers v-if="!authStore.isAuthenticated" classname="flex space-x-3">
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

      <Form
        :fields="registerFields"
        :on-submit="handleRegister"
        submit-button-text="Register"
        :initial-values="registereInitialValues"
      />
    </Containers>
  </Modal>

  <Modal :close="loginModal.close" :is-open="loginModal.isOpen.value" :open="loginModal.open">
    <Containers class="px-2 py-2 mx-2">
      <Text class="text-center">Have an account?</Text>
      <Text class="text-center">Login Now!</Text>

      <Form
        :fields="loginFields"
        :on-submit="handleLogin"
        submit-button-text="Login"
        :initial-values="loginInitialValues"
      />
    </Containers>
  </Modal>

  <Modal :close="successModal.close" :is-open="successModal.isOpen.value" :open="successModal.open">
    <Containers class="px-2 py-2 mx-2">
      <CheckIcon />
      <Text class="text-center">Success</Text>
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
import { useNuxtApp } from "#app"; //
import Form from "~/components/Form/Form.vue";
import { loginFields, registerFields } from "~/data/auth.config";
import { CheckIcon } from "@heroicons/vue/24/solid";
import { setItem } from "~/utils/storage";
import { useAuthStore } from "~/store/auth";

type RegisterForm = {
  fullname: "";
  email: "";
  password: "";
};

type LoginForm = {
  email: "";
  password: "";
};

const { $axios } = useNuxtApp();
const authStore = useAuthStore();

const signUpModal = useOpenClose();
const loginModal = useOpenClose();
const successModal = useOpenClose();

const registereInitialValues = {
  fullname: "",
  email: "",
  password: "",
};

const loginInitialValues = {
  email: "",
  password: "",
};

const handleRegister = async (formData: RegisterForm) => {
  registerUser(formData);
};

const handleLogin = async (formData: LoginForm) => {
  loginUser(formData);
};

const registerUser = async (payload: RegisterForm) => {
  try {
    await $axios.post("/register", {
      fullname: payload.fullname,
      email: payload.email,
      password: payload.password,
    });

    successModal.open();
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

const loginUser = async (payload: LoginForm) => {
  try {
    const response = await $axios.post("/login", {
      email: payload.email,
      password: payload.password,
    });

    if (!response.data.error) {
      setItem("token", response.data.data.token);
      authStore.login(response.data.data.token);
    }
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
