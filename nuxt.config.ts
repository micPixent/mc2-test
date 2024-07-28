// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss"],
  typescript: {
    typeCheck: true,
  },
  ssr: false,
  pages: true,
  runtimeConfig: {
    public: {
      transakApiKey: process.env.NUXT_TRANSAK_API_KEY,
    },
  },
  css: ["@/assets/css/global.css"],
});
