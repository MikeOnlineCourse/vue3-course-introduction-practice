<script setup>
import { computed } from "vue";
import { useMouse } from "../composables/useMouse";

const { x, y } = useMouse();

const flyX = computed(() => {
  return `${x.value - 300 / 2}px`;
});
const flyY = computed(() => {
  return `${y.value - 168 / 2}px`;
});
</script>
<template>
  <div class="content flex-center">
    <img class="fly" :style="{ top: flyY, left: flyX }" src="../assets/images/fly.png" alt="" />
    <h1>X:{{ x }}, Y:{{ y }}</h1>
  </div>
</template>
<style scoped>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("../assets/images/bg.jpg");
  background-size: cover;
}

img.fly {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 168px;
}
</style>
