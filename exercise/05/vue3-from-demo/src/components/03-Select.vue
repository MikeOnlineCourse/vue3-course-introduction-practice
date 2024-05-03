<script setup>
import axios from "axios";
import { ref, watch, onMounted } from "vue";

const twZip = ref({ city: [], area: [] });
const city = ref("");
const area = ref("");

watch(city, (newVal) => {
  const areaFilter = twZip.value.city.filter((list) => list.name === newVal);
  area.value = "";
  twZip.value.area = areaFilter[0].area;
});

const handSelect = () => {
  console.log({ city: city.value, area: area.value });
};

onMounted(() => {
  axios.get("https://vue-lessons-api.vercel.app/city/list").then((res) => {
    twZip.value["city"] = res.data.twzip.city;
  });
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
