<script setup>
const { title } = storeToRefs(useStore());
</script>
<template>
  <div>
    <h1>
      <SvgIcon name="vue" />
      {{ $t("home") }}
    </h1>
    <h2>{{ title }}</h2>
  </div>
</template>
<style scoped>
h1 {
  color: #fff;
  font-size: 110px;
}
h2 {
  color: #fff;
  font-size: 100px;
}
</style>
