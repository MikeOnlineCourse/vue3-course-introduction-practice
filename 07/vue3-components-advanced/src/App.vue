<script setup>
import DemoComponent from "./components/02-useSlots.vue";
</script>

<template>
  <DemoComponent />
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
  background-color: cornsilk;
}
li {
  list-style-type: none;
}
#app {
  width: 100%;
  height: 100%;
}
.demo {
  width: 100%;
  height: 100%;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-col {
  flex-direction: column;
}
</style>
