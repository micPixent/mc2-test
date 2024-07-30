import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    token: null as string | null,
  }),
  actions: {
    login(token: string) {
      this.isAuthenticated = true;
      this.token = token;
    },
    logout() {
      this.isAuthenticated = false;
      this.token = null;
    },
  },
});
