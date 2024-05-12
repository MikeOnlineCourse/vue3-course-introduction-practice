<script setup>
import { ref, reactive, watch } from "vue";

const title = ref("Loading...");

const userInfo = reactive({
  name: "Mike",
  age: 12,
  email: "",
});

setTimeout(() => {
  title.value = "Mike";
  userInfo.email = "1208966@gmail.com";
}, 2000);
</script>
<template>
  <div>
    <h1>
      {{ title }}
    </h1>
    <pre>
        {{ userInfo }}
    </pre>
  </div>
</template>
<style></style>
