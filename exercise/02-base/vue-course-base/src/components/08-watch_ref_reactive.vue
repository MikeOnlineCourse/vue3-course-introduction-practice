<script setup>
import { ref, reactive } from "vue";

const title = ref({
  name: "",
});

const userInfo = reactive({
  name: "Mike",
  age: 12,
  email: "",
});

setTimeout(() => {
  userInfo.email = "1208966@gmail.com";
  title.value.name = "Mike";
}, 2000);
</script>
<template>
  <div></div>
</template>
<style></style>
