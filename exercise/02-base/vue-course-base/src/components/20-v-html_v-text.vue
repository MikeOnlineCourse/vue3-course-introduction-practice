<script setup>
import { ref } from "vue";

const linkHtml = ref(`<a href="https://thecodingpro.com/courses/vue3" target="_blank"> TheCodingpro </a>`);

const content = ref(
  "本課程將帶你一步步的學習理解 <h1>Vue3 每個重要的語法以及搭配</h1> TypeScript 進行開發，讓同學們可以嘗試處理專案上面周邊技術的整合應用，以及體驗更真實的實際開發會遇到的問題情境，來教你思考解決如何解決問題，你將會一步步的學習到前端工程師在開發專案時的經驗過程。"
);
</script>
<template>
  <div>
    <div></div>

    <div></div>
  </div>
</template>
<style>
a {
  color: #42b883;
  text-decoration: none;
  font-weight: bold;
  font-size: 40px;
}
div {
  font-size: 18px;
}
</style>
