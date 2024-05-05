<script setup lang="ts">
const handleChange = (event) => {
  const inpVal = (e.target as HTMLInputElement).value;
  console.log(inpVal);
};
</script>

<template>
  <div>
    <input type="text" @change="handleChange" />
  </div>
</template>
<style></style>
