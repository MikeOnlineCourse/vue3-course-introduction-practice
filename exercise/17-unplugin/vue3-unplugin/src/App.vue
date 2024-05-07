<script setup>
import { watch } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

watch(locale, (newlocale) => {
  localStorage.setItem("locale", newlocale);
});
</script>

<template>
  <div class="_mid flex-center">
    <div class="flex-center menu">
      <router-link to="/">{{ $t("home") }}</router-link>
      <router-link to="/courses">{{ $t("courses") }}</router-link>
      <router-link to="/member">{{ $t("member") }}</router-link>
      <router-link to="/about">{{ $t("about") }}</router-link>
      <router-link to="/address">{{ $t("address") }}</router-link>

      <select v-model="locale" class="lang_select">
        <option>zh-TW</option>
        <option>en-US</option>
      </select>
    </div>

    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.router-link-active {
  color: #333 !important;
  background-color: #e2e2e2 !important;
  font-weight: bold;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: "微軟正黑體";
  background-color: #888;
}
#app {
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
._mid {
  width: 100%;
  height: 100%;
}

.menu {
  position: fixed;
  top: 30px;
  left: 0;
  width: 100%;
}

.menu > a {
  margin: 0 10px;
  text-decoration: none;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  background-color: #333;
}
.lang_select {
  margin-left: 10px;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 10px;
}
</style>
