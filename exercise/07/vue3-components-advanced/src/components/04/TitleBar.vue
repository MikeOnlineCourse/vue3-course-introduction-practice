<script setup></script>

<template>
  <h1 class="title">
    <img src="../../assets/vue.svg" alt="" />
    <slot />
  </h1>
</template>

<style scoped>
h1.title {
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1.title > img {
  margin-right: 10px;
}
</style>
