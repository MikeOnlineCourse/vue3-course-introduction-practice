<script setup lang="ts">
const handleChange = (e: Event) => {
  const inputEvent = e as InputEvent;
  const inpVal = (inputEvent.target as HTMLInputElement).value;
  console.log(inpVal);
};
</script>

<template>
  <div>
    <input type="text" @change="handleChange" />
  </div>
</template>
<style></style>
