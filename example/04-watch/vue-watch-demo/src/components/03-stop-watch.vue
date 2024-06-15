<script setup>
import { ref, watch } from "vue";

const name = ref("Jacky");

const stop = watch(name, (newName) => {
  console.log("資料被更改=>", newName);
});

const stopWatch = () => {
  stop();
};
</script>
<template>
  <div>
    <div class="content_box">
      <h1 class="title">我的名字是 : {{ name }}</h1>
      <input v-model="name" class="mt-10px" type="text" name="" id="" placeholder="輸入你的名字" />
    </div>
    <button @click="stopWatch">STOP Watch</button>
  </div>
</template>
<style>
h1.title {
  font-size: 30px;
}
.content_box {
  margin: 120px 0;
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
