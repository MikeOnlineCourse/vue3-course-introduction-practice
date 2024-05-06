<script setup>
import { inject, onMounted } from "vue";
import Popup from "./Utilities/Popup.vue";
import Card from "./Utilities/Card.vue";

const store = inject("store");

const { isOpen, getDataList } = store;

onMounted(() => {
  getDataList();
});
</script>
<template>
  <div class="box">
    <div class="flex-around w-1000px">
      <Card />
    </div>

    <Popup v-show="isOpen" />
  </div>
</template>

<style scoped>
.box {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.w-1000px {
  width: 1000px;
}
button {
  cursor: pointer;
  width: 200px;
  height: 30px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto 0 auto;
  border-radius: 30px;
  background-color: lightseagreen;
  color: #fff;
  font-size: 20px;
}
</style>
