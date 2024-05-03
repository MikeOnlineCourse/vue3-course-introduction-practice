<script setup>
import { computed, ref } from "vue";

const title = ref("Mike");

const sentence = computed(() => {
  return `我的名字是, ${title.value}`;
});
</script>
<template>
  <div>
    <h1>
      {{ sentence }}
    </h1>
    <input v-model="title" type="text" name="" id="" />
  </div>
</template>
<style>
input {
  width: 200px;
  height: 30px;
  font-size: 20px;
}
</style>
