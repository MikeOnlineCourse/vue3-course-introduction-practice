<script setup lang="ts">
import { ref, computed } from "vue";

const name = ref("Mike");

const title = computed(() => {
  return `Hello, ${name.value}`;
});
</script>
<template>
  <div>
    <h1>
      {{ name }}
    </h1>
    <h1>
      {{ title }}
    </h1>
  </div>
</template>
<style></style>
