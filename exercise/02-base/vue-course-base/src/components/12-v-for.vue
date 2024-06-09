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
  <!-- number -->
  <ul>
    <li>
      <h1></h1>
    </li>
  </ul>
  <!-- array -->
  <ul>
    <li>
      <h1></h1>
    </li>
  </ul>
  <!-- object -->
  <ul>
    <li>
      <h1></h1>
    </li>
  </ul>
  <!-- string -->
  <ul>
    <li>
      <h1></h1>
    </li>
  </ul>
</template>
