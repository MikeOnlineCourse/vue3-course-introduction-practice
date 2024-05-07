<script setup>
import { onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const name = ref("Mike");

const print = ref(9527);

const dayNum = ref(6);

watch(locale, (newlocale) => {
  localStorage.setItem("locale", newlocale);
});

onMounted(() => {
  console.log(t("cancel"));
  console.log(t("email"));
  console.log(t("date"));
  console.log(t("subject"));
  console.log(t("message"));
  console.log(t("upload"));
});
</script>

<template>
  <div class="content">
    <nav>
      <select v-model="locale">
        <option>zh-TW</option>
        <option>en-US</option>
        <option>ja-JP</option>
      </select>
    </nav>
    <p>{{ $t("cancel") }}</p>
    <p>{{ $t("email") }}</p>
    <p>{{ $t("date") }}</p>
    <p>{{ $t("subject") }}</p>
    <p>{{ $t("message") }}</p>
    <p>{{ $t("upload") }}</p>
    <div>
      <!-- 帶入參數填空 { 物件 } -->
      <p>{{ $t("context", { name }) }}</p>

      <!-- 帶入參數填空 [ 陣列 ] -->
      <p>{{ $t("getCount", [print, dayNum]) }}</p>
    </div>
  </div>
</template>

<style>
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-col {
  flex-direction: column;
}
.content {
}
select {
  width: 200px;
  height: 40px;
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
}
p {
  color: #fff;
  font-size: 30px;
  margin-bottom: 30px;
}
</style>
