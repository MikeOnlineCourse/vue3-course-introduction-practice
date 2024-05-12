<script setup>
import { ref } from "vue";
const imgIdx = ref(0);

const slidList = ref([
  { id: "1", src: "https://source.unsplash.com/600x400?1" },
  { id: "2", src: "https://source.unsplash.com/600x400?2" },
  { id: "3", src: "https://source.unsplash.com/600x400?3" },
  { id: "4", src: "https://source.unsplash.com/600x400?4" },
  { id: "5", src: "https://source.unsplash.com/600x400?5" },
  { id: "6", src: "https://source.unsplash.com/600x400?6" },
  { id: "7", src: "https://source.unsplash.com/600x400?7" },
  { id: "8", src: "https://source.unsplash.com/600x400?8" },
]);

const handleMenuActive = (idx) => {
  imgIdx.value = idx;
};
</script>
<template>
  <div class="transition-group-page">
    <div class="content">
      <div class="mid">
        <transition name="slids">
          <img v-for="(item, idx) in slidList" v-show="imgIdx === idx" :key="item.id" :src="item.src" />
        </transition>
      </div>
      <nav class="nav_menu">
        <a v-for="(item, idx) in slidList" :key="item.id" :class="{ active: imgIdx === idx }" @click="handleMenuActive(idx)">
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
