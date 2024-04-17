<script setup>
import { ref } from "vue";

const isActiveIdx = ref(0);

const navMenu = ref([
  { name: "首頁" },
  { name: "關於我們" },
  { name: "商品列表" },
  { name: "歷史沿革" },
  { name: "未來藍圖" },
]);

const hadleActiveLink = (idx) => {
  isActiveIdx.value = idx;
};
</script>
<template>
  <div>
    <ul>
      <li v-for="(nav, idx) in navMenu" :key="nav.name">
        <a
          :class="{ active: isActiveIdx === idx }"
          @click="hadleActiveLink(idx)"
        >
          {{ nav.name }}
        </a>
      </li>
      <!-- <li>
        <a :class="{ active: isActiveIdx === 0 }" @click="hadleActiveLink(0)">
          首頁
        </a>
      </li>
      <li>
        <a :class="{ active: isActiveIdx === 1 }" @click="hadleActiveLink(1)">
          關於我們
        </a>
      </li>
      <li>
        <a :class="{ active: isActiveIdx === 2 }" @click="hadleActiveLink(2)">
          商品列表
        </a>
      </li>
      <li>
        <a :class="{ active: isActiveIdx === 3 }" @click="hadleActiveLink(3)">
          歷史沿革
        </a>
      </li>
      <li>
        <a :class="{ active: isActiveIdx === 4 }" @click="hadleActiveLink(4)">
          未來藍圖
        </a>
      </li> -->
    </ul>
  </div>
</template>
<style>
a {
  cursor: pointer;
  color: #888;
}

a.active {
  color: red;
}

a:hover {
  color: red;
}
</style>
