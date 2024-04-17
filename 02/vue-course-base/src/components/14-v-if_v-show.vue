<script setup>
import { ref } from "vue";

const isBlock = ref(true);

const handleDisplayBlock = () => {
  isBlock.value = !isBlock.value;
};
</script>
<template>
  <div class="flex-between flex-col">
    <h1 v-if="isBlock">v-if Button</h1>
    <h1 v-show="isBlock">v-show Button</h1>

    <button class="flex-center" @click="handleDisplayBlock">DOM toggle</button>
  </div>
</template>
<style>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex-col {
  flex-direction: column;
}

button {
  width: 200px;
  height: 30px;
  background-color: #dddddd;
  margin-top: 10px;
}
</style>
