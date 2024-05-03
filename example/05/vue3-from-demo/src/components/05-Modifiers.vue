<script setup>
import { ref, watch } from "vue";

const lazyVal = ref("");
const numberVal = ref("");
const trimVal = ref("");

watch(lazyVal, (newVal) => {
  console.log("lazy=>", newVal);
});
watch(numberVal, (newVal) => {
  console.log("number=>", newVal);
});
watch(trimVal, (newVal) => {
  console.log("trim=>", newVal);
});
</script>
<template>
  <div id="app">
    <div class="input-box">
      <input type="text" placeholder="lazy" v-model.lazy="lazyVal" />
      <p>{{ lazyVal }}</p>
    </div>
    <div class="input-box">
      <input type="text" placeholder="number" v-model.number="numberVal" />
      <p>{{ numberVal }}</p>
    </div>
    <div class="input-box">
      <input type="text" placeholder="trim" v-model.trim="trimVal" />
      <p>{{ trimVal }}</p>
    </div>
  </div>
</template>
<style>
input {
  height: 30px;
  padding-left: 5px;
}
p {
  color: #fff;
}
.input-box {
  margin-bottom: 30px;
  padding-left: 5px;
}
</style>
