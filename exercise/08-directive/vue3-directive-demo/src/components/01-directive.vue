<script setup>
const vFocus = {
  mounted: (el) => el.focus(),
};
</script>
<template>
  <input type="text" v-focus placeholder="輸入點什麼..." />
</template>
<style scoped>
input {
  width: 300px;
  height: 40px;
  padding-left: 10px;
}
</style>
