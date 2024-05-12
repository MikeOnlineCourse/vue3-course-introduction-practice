<script setup lang="ts">
import { reactive } from "vue";

const user = reactive({
  name: "Mike",
  age: 27,
  email: "",
});
</script>
<template>
  <div>
    {{ user }}
  </div>
</template>
<style></style>
