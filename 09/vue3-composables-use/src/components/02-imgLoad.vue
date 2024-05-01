<script setup>
import { useImgLoad } from "../composables/useImgLoad.js";

const banner = "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KncG4Kdw578f6IdYj2Vczg.jpeg";

const { images, isLoad, error } = useImgLoad(banner);
</script>
<template>
  <div class="imgload">
    <div v-if="!error">
      <h1 v-if="isLoad">載入中...</h1>
      <img v-else :src="images" alt="" />
    </div>
    <h1 v-else>{{ error }}</h1>
  </div>
</template>
<style scoped>
.imgload {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
