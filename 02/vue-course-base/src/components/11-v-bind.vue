<script setup>
import { ref } from "vue";

const url = ref("https://thecodingpro.com/courses/vue3");
</script>
<template>
  <div>
    <a v-bind:href="url" target="_blank">
      {{ url }}
    </a>
    <a :href="url" target="_blank">
      {{ url }}
    </a>
  </div>
</template>
<style></style>
