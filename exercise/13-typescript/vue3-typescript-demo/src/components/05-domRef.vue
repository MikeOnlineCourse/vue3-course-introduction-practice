<script setup>
import { ref, onMounted } from "vue";

const el = ref(null);

onMounted(() => {
  el.value?.focus();
});
</script>

<template>
  <div>
    <input ref="el" type="text" />
  </div>
</template>
