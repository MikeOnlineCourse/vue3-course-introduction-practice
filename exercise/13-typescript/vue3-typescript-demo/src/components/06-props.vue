<script setup>
//   name: "Mike",
//   age: 12,
//   info: {
//     email: "1208966@gmail.com",
//     phone: "0910-xxx-xxx",
//   },
const props = defineProps({
  name: {
    type: String,
    default: "Mike",
  },
  age: {
    type: Number,
    default: 12,
  },
  info: {
    type: Object,
    default: () => ({
      email: "1208966@gmail.com",
      phone: "0910-xxx-xxx",
    }),
  },
});
</script>
<template>
  <div>
    <pre>
      {{ props }}
    </pre>
  </div>
</template>
<style></style>
