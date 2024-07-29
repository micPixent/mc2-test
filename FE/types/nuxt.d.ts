// types/nuxt.d.ts
import type { AxiosInstance } from "axios";

declare module "#app" {
  interface NuxtApp {
    $axios: AxiosInstance;
  }
}
