<script setup>
import DemoComponent from "./components/15-class.vue";
</script>

<template>
  <div class="content flex-center">
    <DemoComponent />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app,
.content {
  width: 100%;
  height: 100%;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
