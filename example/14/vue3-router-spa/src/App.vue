<script setup></script>

<template>
  <div class="_mid flex-center">
    <router-view />
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
  background-color: #888;
}
#app {
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
._mid {
  width: 100%;
  height: 100%;
}
</style>
