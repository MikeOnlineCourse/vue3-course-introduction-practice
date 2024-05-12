<script setup lang="ts">
const handleChange = (e) => {
  const inputEvent = e;
  const inpVal = inputEvent.target.value;
  console.log(inpVal);
};
</script>

<template>
  <div>
    <input type="text" @change="handleChange" />
  </div>
</template>
<style></style>
