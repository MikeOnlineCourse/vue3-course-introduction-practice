<script setup>
import { ref } from "vue";

const money = ref(0);

// const formattedNumber = computed(() => money.value.toLocaleString());
</script>
<template>
  <div>
    <input v-model="money" type="number" placeholder="輸入個金額..." />
    <!-- <h1>{{ formattedNumber }}</h1> -->
    <h1 v-thousand="money"></h1>
  </div>
</template>
<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
input {
  width: 300px;
  height: 40px;
  padding-left: 10px;
  margin-bottom: 10px;
}
</style>
