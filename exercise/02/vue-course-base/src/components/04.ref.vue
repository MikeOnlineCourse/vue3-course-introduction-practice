<script setup>
import { ref } from "vue";
const title = ref("Vue3 Hello World!");

setTimeout(() => {
  title.value = "Updated";
}, 2000);
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>
