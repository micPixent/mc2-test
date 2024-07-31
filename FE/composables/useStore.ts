import { defineStore } from "pinia";

export const useStore = defineStore("myStore", {
  state: () => ({
    myValue: "",
  }),
  actions: {
    setValue(value: string) {
      this.myValue = value;
    },
    getValue() {
      return this.myValue;
    },
  },
});
