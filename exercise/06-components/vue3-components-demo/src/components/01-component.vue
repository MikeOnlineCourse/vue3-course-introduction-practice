<script setup>
import { ref } from "vue";
const name = ref("mike");
console.log(name.value);
</script>

<template>
  <div class="box">
    <h1>要將這個模板給拆出去</h1>
    <h2>{{ name }}</h2>
  </div>
</template>

<style>
.box {
  width: 800px;
  height: 300px;
  background-color: rgb(62, 62, 62);
  color: wheat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.box > h2 {
  font-size: 50px;
}
</style>
