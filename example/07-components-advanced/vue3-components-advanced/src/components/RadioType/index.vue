<script setup>
const model = defineModel();
</script>
<template>
  <div class="flex-center radio_type">
    <div class="mx-10px">
      <input
        v-model="model"
        type="radio"
        id="higher"
        name="drone"
        value="higher"
        checked
      />
      <label for="higher">higher</label>
    </div>
    <div class="mx-10px">
      <input
        v-model="model"
        type="radio"
        id="medium"
        name="drone"
        value="medium"
      />
      <label for="medium">medium</label>
    </div>
    <div class="mx-10px">
      <input
        v-model="model"
        type="radio"
        id="lowLevel"
        name="drone"
        value="lowLevel"
      />
      <label for="lowLevel">lowLevel</label>
    </div>
  </div>
</template>
<style scoped>
.radio_type {
  margin: 20px 0px;
}
.mx-10px {
  margin: 0px 10px;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

p,
label {
  font: 1rem "Fira Sans", sans-serif;
}

input {
  margin: 0.4rem;
}
</style>
