import { defineNuxtPlugin } from "#app";
import axios from "axios";
import type { AxiosInstance, AxiosResponse, AxiosError } from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080/mc2-test",
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      alert("unknown error ,please try again later");
      if (error.response) {
        console.error("Response error:", error.response.data);
      } else if (error.request) {
        console.error("Request error:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      return Promise.reject(error);
    },
  );

  nuxtApp.provide("axios", axiosInstance);
});
