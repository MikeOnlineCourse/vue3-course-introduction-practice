<script setup>
import { ref } from "vue";

const listArr = ref(["A", "B", "C"]);

const info = ref({
  name: "mike",
  age: 12,
  address: "Taiwan",
});

const words = ref("abcdefghijklmnopqrstuvwzyz");
</script>
<template>
  <ul>
    <li>
      <h1></h1>
    </li>
  </ul>
</template>
