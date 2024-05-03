<script setup>
import { ref } from "vue";
import NameBar from "./07/NameBar.vue";

const userName = ref("");
</script>
<template>
  <div class="content flex-center">
    <NameBar v-model="userName" />
  </div>
</template>
<style scoped>
.content {
  width: 100vw;
  height: 100vh;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  color: #fff;
}
</style>
