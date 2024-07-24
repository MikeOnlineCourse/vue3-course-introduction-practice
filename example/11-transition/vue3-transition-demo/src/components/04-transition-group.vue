<script setup>
import { ref } from "vue";
const imgIdx = ref(0);
const slidList = ref([
  { id: "1", src: "https://placeholder.pics/svg/600x400/FFB833-73D4FF" },
  { id: "2", src: "https://placeholder.pics/svg/600x400/BCFFA6-FFD31F" },
  { id: "3", src: "https://placeholder.pics/svg/600x400/FF4FF0-FF2B94" },
  { id: "4", src: "https://placeholder.pics/svg/600x400/D8FFB3-4FFFFA" },
  { id: "5", src: "https://placeholder.pics/svg/600x400/FFF0F0-FFB0B0" },
  { id: "6", src: "https://placeholder.pics/svg/600x400/CAFFD2-FFD3C2" },
  { id: "7", src: "https://placeholder.pics/svg/600x400/FFBDDD-93FF29" },
  { id: "8", src: "https://placeholder.pics/svg/600x400/B3CDFF-1A65FF" },
]);

const handleMenuActive = (idx) => {
  imgIdx.value = idx;
};
</script>
<template>
  <div class="transition-group-page">
    <div class="content">
      <div class="mid">
        <transition-group name="slids">
          <img v-for="(item, idx) in slidList" v-show="imgIdx === idx" :key="item.id" :src="item.src" />
        </transition-group>
      </div>
      <nav class="nav_menu">
        <a
          v-for="(item, idx) in slidList"
          :key="item.id"
          :class="{ active: imgIdx === idx }"
          @click="handleMenuActive(idx)"
        >
          {{ idx + 1 }}
        </a>
      </nav>
    </div>
  </div>
</template>
<style scoped>
.slids-enter-active,
.slids-leave-active {
  transition: transform 0.3s ease;
}

.slids-enter-from {
  transform: translateX(-550px);
}
.slids-leave-to {
  transform: translateX(550px);
}

.transition-group-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #233245;
}

.content {
  width: 600px;
  height: 400px;
}
.content .mid {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-bottom: 20px;
}
.content .mid img {
  position: absolute;
  top: 0;
  right: 0;
}
.content .nav_menu {
  text-align: center;
}
.content .nav_menu a {
  cursor: pointer;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin: 5px;
  line-height: 20px;
  background-color: white;
}
.content .nav_menu a.active {
  color: #fff;
  background-color: #40c297;
}
</style>
