import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const title = ref("Hello World");

  return { title };
});
