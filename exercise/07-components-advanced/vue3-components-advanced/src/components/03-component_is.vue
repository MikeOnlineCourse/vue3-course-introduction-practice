<script setup>
import Home from "./03/Home.vue";
import About from "./03/About.vue";
import Courses from "./03/Courses.vue";
import { ref } from "vue";

const activeType = ref("Home");

const switchView = (type) => {
  activeType.value = type;
};
</script>
<template>
  <div class="content flex-center">
    <div class="content_box">
      <header class="flex-center">
        <nav>
          <a :class="{ active: activeType === 'Home' }" @click="switchView('Home')">首頁</a>
          <a :class="{ active: activeType === 'About' }" @click="switchView('About')">平台介紹</a>
          <a :class="{ active: activeType === 'Courses' }" @click="switchView('Courses')">線上課程</a>
        </nav>
      </header>
      <main class="flex-center flex-col">
        <Home v-if="activeType === 'Home'" />
        <About v-if="activeType === 'About'" />
        <Courses v-if="activeType === 'Courses'" />
      </main>
    </div>
  </div>
</template>
<style scoped>
.content {
  width: 100%;
  height: 100%;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-col {
  flex-direction: column;
}
.content_box {
  width: 700px;
  height: 500px;
  background-color: #fff;
}
header {
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #464646;
}

nav > a {
  cursor: pointer;
  padding: 5px 20px;
  font-weight: bold;
  border-radius: 50px;
}
nav > a:hover {
  color: #fff;
  background-color: #262052;
}

a.active {
  color: #fff;
  background-color: #262052;
}

main {
  width: 100%;
  height: 450px;
  background-color: rgb(210, 226, 227);
  padding: 0 50px;
}
</style>
