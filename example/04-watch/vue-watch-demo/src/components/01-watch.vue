<script setup>
import { ref, watch } from "vue";

const name = ref("Jacky");

const userInfo = ref({
  age: 12,
  name: "Mike",
  address: "Taipei",
});

/**
 * immediate: true 初始化先觸發一次
 */
watch(
  name,
  (newName) => {
    console.log("immediate=>", newName);
  },
  {
    immediate: true,
  }
);

/**
 * deep: true 深度監聽
 */
watch(
  userInfo,
  (newInfo) => {
    console.log("deep=>", newInfo);
  },
  {
    deep: true,
  }
);

// once 只會觸發一次
watch(
  name,
  (newName) => {
    console.log("once=>", newName);
  },
  {
    once: true,
  }
);
</script>
<template>
  <div>
    <div class="content_box">
      <h1 class="title">我的名字是 : {{ name }}</h1>
      <input v-model="name" class="mt-10px" type="text" name="" id="" placeholder="輸入你的名字" />
    </div>
    <div class="content_box">
      <h1 class="title">我的名字是 : {{ userInfo.name }}</h1>
      <input v-model="userInfo.name" class="mt-10px" type="text" name="" id="" placeholder="輸入你的名字" />
    </div>
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
