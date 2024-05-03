<script setup>
import { computed } from "vue";

const model = defineModel();

const name = computed(() => (!model.value ? model.value : `: ${model.value}`));
</script>
<template>
  <div class="name_bar">
    <input v-model="model" type="text" required />
    <h1 class="title">輸入你的姓名 {{ name }}</h1>
  </div>
</template>
<style scoped>
.name_bar {
  position: relative;
  border: 3px solid tomato;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 20px;
  transition: all 0.3s;
  color: #000;
  position: absolute;
  top: 0;
  left: 20px;
}
input {
  width: 400px;
  height: 40px;
  padding-left: 10px;
  font-size: 20px;
}
input:focus ~ .title {
  top: -40px;
  left: 0px;
  color: #fff;
}

input:valid ~ .title {
  top: -40px;
  left: 0px;
  color: #fff;
}
</style>
