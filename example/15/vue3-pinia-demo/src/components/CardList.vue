<script setup>
import { useStore } from "../store/useStore.js";
import { storeToRefs } from "pinia";
import Popup from "./Utilities/Popup.vue";
import Card from "./Utilities/Card.vue";

const store = useStore();

const { isOpen } = storeToRefs(store);
</script>
<template>
  <div class="box">
    <div class="flex-around w-1000px">
      <Card />
    </div>

    <Popup v-show="isOpen" />
  </div>
</template>

<style scoped>
.box {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.w-1000px {
  width: 1000px;
}
</style>
