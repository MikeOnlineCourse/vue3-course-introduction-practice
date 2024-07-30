<script setup lang="ts">
import DemoComponents from "./components/01-ref.vue";
</script>

<template>
  <div>
    <DemoComponents />
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
  font-family: "微軟正黑體";
  background-color: #a0a6a3;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.provide_inject {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
img {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-around {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
}
.flex-col {
  flex-direction: column;
}
</style>
