<script setup>
import { onMounted, ref } from "vue";

const titleRef = ref(null);

onMounted(() => {
  // 使用 ref 取得元素
  console.log(titleRef.value);
  titleRef.value.style.color = "blue";

  // 使用 querySelector 取得元素
  console.log(document.querySelector("#title"));
  // document.querySelector("#title").style.color = "red";
});
</script>
<template>
  <div>
    <h1 id="title" ref="titleRef">這是一個標題</h1>
  </div>
</template>
<style></style>
