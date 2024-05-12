<script setup>
import { onMounted, ref } from "vue";
import RadioType from "./RadioType/index.vue";
import axios from "axios";

import HigherPage from "./09/higher.vue";
import LowLevelPage from "./09/lowLevel.vue";
import MediumPage from "./09/medium.vue";

// higher | lowLevel | medium
const info = ref("");

onMounted(() => {
  axios.get("https://vue-lessons-api.vercel.app/courses/list").then(() => {
    info.value = "lowLevel";
  });
});
</script>
<template>
  <div class="content flex-center">
    <RadioType v-model="info" />

    <main class="flex-center">
      <HigherPage v-if="info === 'higher'" />
      <LowLevelPage v-if="info === 'lowLevel'" />
      <MediumPage v-if="info === 'medium'" />
    </main>
  </div>
</template>
<style scoped>
.content {
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  color: #fff;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
main {
  width: 400px;
  height: 400px;
  background-color: darkgray;
}
</style>
