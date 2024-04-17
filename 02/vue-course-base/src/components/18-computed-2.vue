<script setup>
import { ref, computed } from "vue";

const listArr = ref([
  { id: 1, name: "mike" },
  { id: 2, name: "jacky" },
  { id: 3, name: "xuan" },
  { id: 4, name: "andy" },
  { id: 5, name: "ban" },
  { id: 6, name: "mgi" },
]);

const isShowList = computed(() => {
  return listArr.value.length > 0;
});

const titleContent = computed(() => {
  return listArr.value.length > 0 ? "以下是列表" : "目前沒有列表";
});

const closeList = (idx) => {
  listArr.value = listArr.value.filter((list, index) => index !== idx);
};
</script>
<template>
  <div>
    <h1>
      {{ titleContent }}
    </h1>
    <ul v-show="isShowList">
      <li v-for="(list, idx) in listArr" :key="list.id">
        {{ list.name }}
        <button @click="closeList(idx)">X</button>
      </li>
    </ul>
  </div>
</template>
<style>
li {
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: #ddd;
}
</style>
