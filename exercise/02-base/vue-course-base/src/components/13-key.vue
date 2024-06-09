<script setup>
import { ref } from "vue";

const listArr = ref([
  {
    id: "A",
    name: "Mike",
  },
  {
    id: "B",
    name: "Andy",
  },
  {
    id: "C",
    name: "Jacky",
  },
]);
</script>
<template>
  <ul>
    <li>
      <h1></h1>
    </li>
  </ul>
</template>
