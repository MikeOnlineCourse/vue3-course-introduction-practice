<script setup>
import { ref } from "vue";

import RadioType from "../components/RadioType/index.vue";

// higher | lowLevel | medium | default
const info = ref("");
</script>
<template>
  <div class="content flex-center">
    <RadioType v-model="info" />

    <main class="flex-center">
      <router-view />
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
