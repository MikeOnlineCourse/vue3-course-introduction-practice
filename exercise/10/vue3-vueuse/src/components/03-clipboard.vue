<script setup>
// https://vueuse.org/core/useClipboard/
import { ref } from "vue";
import { useClipboard } from "@vueuse/core";

const source = ref("Hello");

const { text, copy, copied, isSupported } = useClipboard();

const copyText = () => {
  copy(source.value);
};
</script>

<template>
  <div class="content">
    <div v-if="isSupported" class="flex-center flex-col">
      <input type="text" v-model="source" />

      <button @click="copyText">
        <span v-if="!copied">複製</span>
        <span v-else>複製完畢!</span>
      </button>

      <p>目前複製的文字: {{ text || "" }}</p>
    </div>
    <p v-else>您的瀏覽器不支援複製的功能</p>
  </div>
</template>
<style scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/images/bg.jpg");
  background-size: cover;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-col {
  flex-direction: column;
}
input {
  width: 300px;
  height: 40px;
  font-size: 25px;
  text-align: center;
}
button {
  cursor: pointer;
  width: 150px;
  height: 40px;
  font-size: 25px;
  border-radius: 20px;
  background-color: steelblue;
  color: #fff;
  border: 0px;
  margin: 30px 0;
}
p {
  font-size: 25px;
  font-weight: bold;
}
</style>
