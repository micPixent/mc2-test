import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    token: null as string | null,
  }),
  actions: {
    init() {
      const storedToken = localStorage.getItem("mctest.token");
      if (storedToken) {
        this.token = storedToken;
        this.isAuthenticated = true;
      }
    },
    login(token: string) {
      this.isAuthenticated = true;
      this.token = token;
      localStorage.setItem("mctest.token", token);
    },
    logout() {
      this.isAuthenticated = false;
      this.token = null;
      localStorage.removeItem("mctest.token");
    },
  },
});
