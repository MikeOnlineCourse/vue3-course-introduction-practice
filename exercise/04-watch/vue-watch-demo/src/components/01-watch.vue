<script setup>
import { ref, watch } from "vue";

const name = ref("Jacky");

const useInfo = ref({
  age: 12,
  name: "Mike",
  address: "Taipei",
});

setTimeout(() => {
  name.value = "Mike";
  useInfo.value.name = "Jacky";
}, 2000);

// 監聽 name
watch(name, (newVal, oldVal) => {
  console.log({ newVal, oldVal });
});

/**
 * immediate: true 初始化先觸發一次
 * deep: true 深度監聽
 */
watch(
  useInfo,
  (newInfo) => {
    console.log("deep=>", newInfo);
  },
  {
    deep: true,
    immediate: true,
    once: true,
  }
);

// once 只會觸發一次
watch(
  name,
  (newName) => {
    console.log("once=>", newName);
  },
  { once: true }
);
</script>
<template>
  <div></div>
</template>
<style></style>
