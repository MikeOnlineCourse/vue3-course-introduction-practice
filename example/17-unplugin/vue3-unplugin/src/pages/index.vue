<script setup>
const { x, y } = useMouse();
</script>
<template>
  <div>
    <h1>
      <SvgIcon name="vue" />
      {{ $t("home") }}
    </h1>
    <h2>
      {{ x }},
      {{ y }}
    </h2>
  </div>
</template>
<style scoped>
h1 {
  color: #fff;
  font-size: 200px;
}
</style>
