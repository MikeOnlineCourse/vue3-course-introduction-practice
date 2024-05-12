<script setup>
import { ref } from "vue";

const title = ref("");
</script>

<template>
  <div>
    <input type="text" />
    <h1>{{ title }}</h1>
  </div>
</template>
