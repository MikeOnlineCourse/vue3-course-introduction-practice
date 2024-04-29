<script setup>
import { ref } from "vue";
import Money from "../components/02/Money.vue";
const coursesList = ref([
  {
    id: 1,
    name: "JavaScript & TypeScript 前端工程師入門班",
    price: 6000,
    other: null,
  },
  {
    id: 2,
    name: "Vue3 高效入門與實踐",
    price: null,
    other: null,
  },
  {
    id: 3,
    name: "Nuxt3 高效入門全攻略",
    price: 4500,
    other: null,
  },
  {
    id: 4,
    name: "Vue 單元測試 vue-test-utils｜入門",
    price: 2200,
    other: null,
  },
]);
</script>
<template>
  <div class="demo flex-center">
    <div class="content">
      <ul class="table flex-center bold text-20px">
        <li class="flex-center t1">編號</li>
        <li class="flex-center t2">品項</li>
        <li class="flex-center t3">價錢</li>
        <li class="flex-center t4">其他</li>
      </ul>
      <ul v-for="list in coursesList" :key="list.id" class="table flex-center">
        <li class="flex-center t1">No.{{ list.id }}</li>
        <li class="flex-center t2">{{ list.name }}</li>
        <li class="flex-center t3">
          <Money>{{ list.price }}</Money>
        </li>
        <li class="flex-center t4">-</li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.content {
  width: 1000px;
}
ul.table {
  width: 100%;
}
.bold {
  font-weight: bold;
}
.text-20px {
  font-size: 20px;
}
ul.table > li {
  height: 50px;
  background-color: #fff;
  border: 1px solid #ccc;
}
ul.table > li.t1 {
  width: 20%;
}
ul.table > li.t2 {
  width: 40%;
}
ul.table > li.t3 {
  width: 20%;
}
ul.table > li.t4 {
  width: 20%;
}
</style>
