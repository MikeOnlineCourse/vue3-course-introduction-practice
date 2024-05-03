<script setup>
import { ref } from "vue";

const verificationCode = ref("");

const handleSubmit = () => {
  const req = {
    code: verificationCode.value,
  };
  console.log(req);
};

const handleKeydown = (e) => {
  const log = {
    key: e.key,
    code: e.code,
    keyCode: e.keyCode,
  };
  console.log(log);
};
</script>
<template>
  <div>
    <div>
      驗證碼:
      <input
        class="code"
        type="text"
        v-model="verificationCode"
        placeholder="輸入驗證碼"
        @keyup.enter="handleSubmit"
      />
    </div>
    <button @click="handleSubmit">Submit</button>
    <input type="text" @keyup="handleKeydown" placeholder="測試 key code" />
  </div>
</template>
<style>
input.code {
  height: 30px;
  font-size: 16px;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  background-color: #ddd;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
