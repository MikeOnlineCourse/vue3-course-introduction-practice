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
    <li v-for="list in listArr">
      <h1>
        {{ list.name }}
      </h1>
    </li>
  </ul>
</template>
