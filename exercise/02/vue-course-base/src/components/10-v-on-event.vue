<script setup>
import { ref } from "vue";

const text = ref("");

const handleTextA = () => {
  text.value = "ABC";
};

const handleTextB = () => {
  text.value = "123";
};
</script>
<template>
  <div class="flex-center flex-col">
    <h1>{{ text }}</h1>
    <button class="flex-center" @click="handleTextA">click ABC</button>
    <button class="flex-center" v-on:click="handleTextB">click 123</button>
  </div>
</template>
<style>
.flex-center {
  display: flex;
  justify-content: center;
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
