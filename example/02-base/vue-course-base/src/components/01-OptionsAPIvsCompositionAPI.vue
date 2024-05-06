<script>
// export default {
//   data() {
//     return {
//       message: "Hello World!",
//       isRed: true,
//       color: "green",
//     };
//   },
//   methods: {
//     toggleRed() {
//       this.isRed = !this.isRed;
//       this.message = "Mike!";
//     },
//     toggleColor() {
//       this.color = "blue";
//     },
//   },
// };
</script>

<script setup>
import { ref } from "vue";

const message = ref("Hello World!");
const isRed = ref(true);
const color = ref("green");

const toggleRed = () => {
  isRed.value = !isRed.value;
  message.value = "Mike!";
};

const toggleColor = () => {
  color.value = "blue";
};
</script>

<template>
  <div>
    {{ message }}
    {{ isRed }}
    {{ color }}
  </div>
</template>
