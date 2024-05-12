<script setup>
import { ref } from "vue";

const title = ref("Mike");
</script>
<template>
  <div>
    <h1>我的名字是, {{ title }}</h1>
    <input v-model="title" type="text" name="" id="" />
  </div>
</template>
<style>
input {
  width: 200px;
  height: 30px;
  font-size: 20px;
}
</style>
