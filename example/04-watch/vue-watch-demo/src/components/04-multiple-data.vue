<script setup>
import { ref, watch } from "vue";

const name = ref("Jacky");

const age = ref(12);

watch([name, age], ([newName, newAge]) => {
  console.log(newName, newAge);
});
</script>
<template>
  <div>
    <div class="content_box">
      <h1 class="title">我的名字是 : {{ name }}</h1>
      <input v-model="name" class="mt-10px" type="text" name="" id="" placeholder="輸入你的名字" />
    </div>
    <div class="content_box">
      <h1 class="title">我的年齡是 : {{ age }} 歲</h1>
      <input v-model="age" class="mt-10px" type="text" name="" id="" placeholder="輸入你的年齡" />
    </div>
  </div>
</template>
<style>
h1.title {
  font-size: 30px;
}
.content_box {
  margin: 50px 0;
}
input {
  width: 200px;
  height: 30px;
  text-align: center;
}
.mt-10px {
  margin-top: 10px;
}
</style>
