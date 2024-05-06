<script setup>
import { ref } from "vue";

const title = ref("");

console.log(title.value);
</script>

<template>
  <div>
    <input v-model="title" type="text" />
    <h1>{{ title }}</h1>
  </div>
</template>
