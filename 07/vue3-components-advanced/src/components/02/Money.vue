<script setup>
import { useSlots, computed } from "vue";

const slots = useSlots();

const isShowSlots = computed(() => slots.default()[0].children);
</script>
<template>
  <div class="money-box" v-if="isShowSlots">
    <img src="../../assets/money.png" alt="" />
    <slot />
  </div>
  <p v-else>-</p>
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
