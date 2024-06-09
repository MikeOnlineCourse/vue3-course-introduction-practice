<script setup>
import { ref } from "vue";

const listArr = ref(["Mike", "Jacky", "Andy"]);

const info = ref({
  name: "mike",
  age: 12,
  address: "Taiwan",
});

const words = ref("abcdefghijklmnopqrstuvwzyz");
</script>
<template>
  <ul>
    <li v-for="(item, idx) in listArr">
      <h1>{{ idx }}: {{ item }}</h1>
    </li>
  </ul>
  <ul>
    <li v-for="(value, name) in info">
      <h1>{{ name }}: {{ value }}</h1>
    </li>
  </ul>
  <ul>
    <li v-for="(item, idx) in words">
      <h1>{{ idx }}: {{ item }}</h1>
    </li>
  </ul>
</template>
