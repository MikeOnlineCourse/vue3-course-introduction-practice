import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const title = ref("TheCodingPro");

  return { title };
});
