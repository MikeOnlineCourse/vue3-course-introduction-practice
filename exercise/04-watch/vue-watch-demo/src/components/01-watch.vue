<script setup>
import { ref, watch } from "vue";

const name = ref("Jacky");

const useInfo = ref({
  age: 12,
  name: "Mike",
  address: "Taipei",
});

setTimeout(() => {
  name.value = "Mike";
  useInfo.value.name = "Jacky";
}, 2000);
</script>
<template>
  <div></div>
</template>
<style></style>
