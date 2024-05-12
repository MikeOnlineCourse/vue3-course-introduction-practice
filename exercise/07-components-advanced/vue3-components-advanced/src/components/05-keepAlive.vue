<script setup>
import Home from "./05/Home.vue";
import About from "./05/About.vue";
import Login from "./05/Login.vue";
import { ref } from "vue";

const viewArr = {
  Home,
  About,
  Login,
};

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
          <a :class="{ active: activeType === 'Login' }" @click="switchView('Login')">登入/註冊</a>
        </nav>
      </header>
      <main class="flex-center flex-col">
        <component :is="viewArr[activeType]"></component>
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
  height: 600px;
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
  height: 550px;
  background-color: rgb(210, 226, 227);
  padding: 0 50px;
}
</style>
