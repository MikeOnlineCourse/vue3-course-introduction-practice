<script setup>
import TitleBar from "./04/TitleBar.vue";
</script>
<template>
  <div class="content">
    <TitleBar id="attributes" class="big-size">Attributes 繼承 </TitleBar>
    <p>透傳 attribute」指的是傳遞給一個元件，卻沒有被該元件宣告為 props 或 emits 的 attribute 或 v-on 事件監聽器。最常見的例子就是 class、style 和 id。</p>
  </div>
</template>
<style scoped>
.content {
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.big-size {
  font-size: 60px !important;
}
</style>
