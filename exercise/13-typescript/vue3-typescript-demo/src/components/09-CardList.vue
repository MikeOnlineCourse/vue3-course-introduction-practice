<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import Popup from "./Utilities/Popup.vue";
import Card from "./Utilities/Card.vue";

const coursesArr = ref([]);

const coursesId = ref(0);

const isOpen = ref(false);

const getDetal = (id) => {
  coursesId.value = id;
  isOpen.value = true;
};

const closePopup = () => {
  coursesId.value = 0;
  isOpen.value = false;
};

const openUrl = (url) => {
  window.open(url, "_blank");
};

onMounted(() => {
  axios.get("https://vue-lessons-api.vercel.app/courses/list").then((res) => {
    coursesArr.value = res.data;
  });
});
</script>
<template>
  <div class="box">
    <div class="flex-around w-1000px">
      <Card :coursesArr="coursesArr" :coursesId="coursesId" :getDetal="getDetal" :openUrl="openUrl" :closePopup="closePopup" />
      <Popup v-show="isOpen" />
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.w-1000px {
  width: 1000px;
}
</style>
