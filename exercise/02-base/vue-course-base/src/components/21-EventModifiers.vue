<script setup>
import { ref } from "vue";
const coursesArr = ref([
  {
    id: 286,
    name: "Vue3 高效入門與實踐",
    photo: `https://ik.imagekit.io/thecodingpro/mike-school/tr:w-1920,c-at_max/o/web%2F1700227376.jpg?alt=media&token=72ba7e9b-59ae-473e-8a1b-5de5a0b3ee5d`,
    description: "本課程將帶你一步步的學習理解  Vue3 每個重要的語法以及搭配 TypeScript 進行開發，讓同學們可以嘗試處理專案上面周邊技術的整合應用，以及體驗更真實的實際開發會遇到的問題情境。",
    money: 2500,
    teacher: {
      name: "Mike",
      img: "https://firebasestorage.googleapis.com/v0/b/mike-school.appspot.com/o/web%2F1636283270.jpg?alt=media&token=650e0df0-2b62-4adf-83f6-d1e87a75a58d",
    },
    url: "https://thecodingpro.com/courses/vue3",
    moreUrl: "https://thecodingpro.com/courses",
  },
]);

const openUrl = (url) => {
  window.open(url, "_blank");
};
</script>
<template>
  <div>
    <a class="card" v-for="item in coursesArr" :key="item.id" href="#" @click="openUrl(item.url)">
      <p class="more" @click="openUrl(item.moreUrl)">觀看更多</p>

      <img :src="item.photo" alt="" />
      <div class="content">
        <h1>{{ item.name }}</h1>
        <p class="description">
          {{ item.description }}
        </p>
        <div class="teacher-box">
          <div class="teach-img">
            <img class="teacher" :src="item.teacher.img" alt="" />
            <p>{{ item.teacher.name }}</p>
          </div>
          <h2>NTD: {{ item.money }}</h2>
        </div>
      </div>
    </a>
  </div>
</template>

<style>
a.card {
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 318px;
  height: auto;
  padding: 0px;
  border-radius: 5px;
  margin-bottom: 20px;
  opacity: 0.9;
  transition: opacity 0.2s;
  background-color: rgb(249, 249, 249);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
a.card:hover {
  opacity: 1;
}
a.card > img {
  width: 100%;
}

p.more {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #00000057;
  color: white;
  padding: 5px 10px;
  border-radius: 0px 0px 0px 5px;
  font-size: 12px;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #393939;
}
.content > h1 {
  font-size: 26px;
  height: 100%;
  text-align: left;
  padding-top: 15px;
  padding-bottom: 15px;
}

.content > .description {
  font-size: 12px;
  text-align: left;
  padding: 0px 25px 10px 25px;
}
.teacher-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #393939;
  padding: 10px 18px 20px 18px;
}
.teacher-box > h2 {
  font-size: 13px;
}
.teacher-box > .teach-img {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.teacher-box > .teach-img > img {
  border-radius: 25px;
  margin-right: 10px;
  width: 25px;
  height: 25px;
}
</style>
