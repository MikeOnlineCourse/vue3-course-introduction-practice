<script>
import { ref } from "vue";
export default {
  setup() {
    const title = ref("Vue3 Hello World!");
    return {
      title,
    };
  },
};
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>
