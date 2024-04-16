<script setup>
import { ref, reactive, watch } from "vue";

const title = ref("Vue3 Hello World!");
const userInfo = reactive({
  name: "Mike",
  age: 12,
  email: "",
});

setTimeout(() => {
  title.value = "Updated";
  userInfo.email = "1208966@gmail.com";
}, 2000);

watch(title, (newName) => {
  console.log("new title", newName);
});

watch(
  () => userInfo.email,
  (newEmail) => {
    console.log("new user email", newEmail);
  }
);
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <pre>
      {{ userInfo }}
    </pre>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
