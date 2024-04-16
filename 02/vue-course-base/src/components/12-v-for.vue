<script setup>
import { ref } from "vue";

const listArr = ref(["A", "B", "C"]);
</script>
<template>
  <ul>
    <li v-for="(list, idx) in listArr">
      <h1>{{ idx }}: {{ list }}</h1>
    </li>
  </ul>
</template>
