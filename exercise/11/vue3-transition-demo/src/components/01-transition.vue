<script setup>
import { ref } from "vue";

const isShow = ref(false);

const handleAlert = (bool) => {
  isShow.value = bool;
};
</script>
<template>
  <div class="content">
    <button class="open" @click="handleAlert(true)">開啟</button>

    <transition name="fade">
      <div class="alert" v-if="isShow">
        <h1>發生未知的錯誤</h1>

        <button class="close" @click="handleAlert(false)">確認</button>
      </div>
    </transition>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#app {
  width: 100%;
  height: 100%;
}
#app .content {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("https://source.unsplash.com/1600x900");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
#app .content button {
  width: 200px;
  height: 50px;
  font-size: 30px;
  border-radius: 50px;
}
#app .content .alert {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  width: 500px;
  height: 400px;
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}
#app .content .alert > h1 {
  color: red;
}

button {
  cursor: pointer;
}

.close {
  margin-top: 50px;
}
</style>
