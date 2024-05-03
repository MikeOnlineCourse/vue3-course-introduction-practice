<script setup>
import { reactive } from "vue";

const userInfo = reactive({
  name: "Mike",
  age: 12,
  email: "",
});
setTimeout(() => {
  userInfo.email = "1208966@gmail.com";
}, 2000);
</script>
<template>
  <pre>
     {{ userInfo }}
 </pre
  >
</template>
