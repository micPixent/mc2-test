// plugins/axios.ts
import { defineNuxtPlugin } from "#app";
import axios from "axios";
import type { AxiosInstance } from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080/mc2-test",
    headers: {
      "Content-Type": "application/json",
    },
  });

  nuxtApp.provide("axios", axiosInstance);
});
