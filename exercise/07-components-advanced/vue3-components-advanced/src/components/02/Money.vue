<script setup></script>
<template>
  <div class="money-box">
    <img src="../../assets/money.png" alt="" />
    <slot />
  </div>
  <!-- <p>-</p> -->
</template>
<style scoped>
img {
  display: block;
  width: 30px;
}
.money-box {
  display: flex;
  justify-self: center;
  align-items: center;
  font-weight: bold;
}
</style>
