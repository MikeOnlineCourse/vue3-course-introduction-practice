<script setup>
import DemoComponent from "./components/05-Modifiers.vue";
</script>

<template>
  <div>
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
  background-color: #5e796c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "微軟正黑體";
}

.btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 250px;
  margin: 10px auto 0 auto;
  padding: 10px 0;
  color: white;
  background-color: #47b9a5;
  font-size: 12px;
  border: 0px;
  border-radius: 50px;
}
</style>
