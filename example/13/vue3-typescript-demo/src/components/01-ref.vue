<script setup lang="ts">
import { ref } from "vue";

const name = ref<string>("Mike");
const count1 = ref<number | string>(0);
const count2 = ref<number | string>("1");
</script>
<template>
  <div>
    <h1>
      {{ name }}
    </h1>
    <h1>
      {{ count1 }}
    </h1>
    <h1>
      {{ count2 }}
    </h1>
  </div>
</template>
<style></style>
