<script setup>
import { ref, reactive } from "vue";

const name = ref("");
name.value = "Mike";

const info = reactive({
  name: "",
});
info.name = "Mike";
</script>
<template>
  <div>
    <h1>{{ name }}</h1>
    <h2>{{ info.name }}</h2>
  </div>
</template>
<style></style>
