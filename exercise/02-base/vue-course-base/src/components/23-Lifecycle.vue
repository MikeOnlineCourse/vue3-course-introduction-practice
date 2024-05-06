<script setup>
import { onMounted, onUpdated, onUnmounted } from "vue";

console.log("組件掛載完成前執行");

onMounted(() => {
  console.log("組件掛載完成後執行");
});

onUpdated(() => {
  console.log("狀態更新導致DOM被改變後執行");
});

onUnmounted(() => {
  console.log("當組件被移除後執行");
});
</script>
<template>
  <div></div>
</template>
<style></style>
