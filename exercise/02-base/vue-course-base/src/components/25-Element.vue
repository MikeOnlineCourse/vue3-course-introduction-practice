<script setup>
import { onMounted } from "vue";

onMounted(() => {
  console.log(document.querySelector("#title"));
});
</script>
<template>
  <div>
    <h1 id="title">這是一個標題</h1>
  </div>
</template>
<style></style>
