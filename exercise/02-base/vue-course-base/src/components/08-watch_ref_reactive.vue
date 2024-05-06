<script setup>
import { ref, reactive, watch } from "vue";

const title = ref({
  name: "",
});

const userInfo = reactive({
  name: "Mike",
  age: 12,
  email: "",
});

watch(title.value, (newTitle) => {
  console.log(newTitle);
});

watch(
  () => title.value.name,
  (newTitle) => {
    console.log(newTitle);
  }
);

watch(userInfo, (newInfo) => {
  console.log(newInfo);
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
