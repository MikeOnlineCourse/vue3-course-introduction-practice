<script setup>
import { ref, onMounted } from "vue";

const twZip = ref({ city: [], area: [] });
const city = ref("");
const area = ref("");

onMounted(() => {
  // https://vue-lessons-api.vercel.app/city/list
});
</script>
<template>
  <div>
    <div class="select-box">
      <select v-model="city">
        <option disabled value="">請選擇縣市</option>
        <option v-for="item in twZip.city" :key="item.name">
          {{ item.name }}
        </option>
      </select>
      <select v-model="area">
        <option disabled value="">請選擇區域</option>
        <option v-for="item in twZip.area" :key="item.name" :value="item.zip">
          {{ item.name }}
        </option>
      </select>
    </div>
    <a class="btn" @click="handSelect">送出</a>
  </div>
</template>
<style>
.select-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
select {
  display: block;
  width: 200px;
  height: 30px;
  margin: 0 3px;
}
</style>
