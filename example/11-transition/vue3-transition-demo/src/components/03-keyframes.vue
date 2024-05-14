<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const handleAlert = () => {
  isOpen.value = !isOpen.value;
};
</script>
<template>
  <div class="content flex-center">
    <button @click="handleAlert">開啟彈窗</button>
    <transition name="popup">
      <div v-if="isOpen" class="alert flex-center">
        <h1>發生未知的錯誤</h1>
        <button @click="handleAlert">關閉</button>
      </div>
    </transition>
  </div>
</template>
<style scoped>
.popup-enter-active {
  animation: popup-in 0.5s;
}
.popup-leave-active {
  animation: popup-in 0.5s reverse;
}
@keyframes popup-in {
  0% {
    transform: scale(0) translateX(-50%) translateY(-50%);
    transform-origin: center;
  }
  50% {
    transform: scale(1.25) translateX(-50%) translateY(-50%);
    transform-origin: center;
  }
  100% {
    transform: scale(1) translateX(-50%) translateY(-50%);
    transform-origin: center;
  }
}
.content {
  width: 100%;
  height: 100%;
}
.alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 500px;
  height: 400px;
  border-radius: 16px;
  background-color: #fff;
  flex-direction: column;
  box-shadow: 0 0 30px #000;
}
</style>
