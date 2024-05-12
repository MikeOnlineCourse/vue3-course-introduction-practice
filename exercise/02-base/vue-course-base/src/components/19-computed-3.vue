<script setup>
import { computed, ref } from "vue";

const isActiveIdx = ref(0);

const navMenu = ref([
  { name: "首頁", isShow: true },
  { name: "關於我們", isShow: true },
  { name: "商品列表", isShow: false },
  { name: "歷史沿革", isShow: true },
  { name: "未來藍圖", isShow: false },
  { name: "聯絡我們", isShow: true },
  { name: "註冊", isShow: true },
]);

const hadleActiveLink = (idx) => {
  isActiveIdx.value = idx;
};
</script>
<template>
  <div>
    <ul>
      <li v-for="(nav, idx) in navMenu" :key="nav.name">
        <a :class="{ active: isActiveIdx === idx }" @click="hadleActiveLink(idx)">
          {{ nav.name }}
        </a>
      </li>
    </ul>
  </div>
</template>
<style>
a {
  cursor: pointer;
  color: #888;
  font-size: 30px;
}

a.active {
  color: red;
}

a:hover {
  color: red;
}
</style>
