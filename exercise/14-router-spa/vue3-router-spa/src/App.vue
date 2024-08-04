<script setup></script>

<template>
  <div class="_mid flex-center">
    <div class="flex-center menu"></div>
    <!-- page router view -->
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

.menu {
  position: fixed;
  top: 30px;
  left: 0;
  width: 100%;
}

.menu > a {
  margin: 0 10px;
  text-decoration: none;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  background-color: #333;
}
</style>
