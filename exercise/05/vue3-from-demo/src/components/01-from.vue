<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const terms = ref(false);

const handFromFn = () => {
  const data = {
    email: email.value,
    password: password.value,
    terms: terms.value,
  };
  console.log(data);
};
</script>
<template>
  <div id="app">
    <img class="logo" src="../assets/thecodingprologo.png" alt="" />
    <div class="input-box">
      <p>E-MAIL</p>
      <input type="text" placeholder="輸入email" v-model="email" />
    </div>
    <div class="input-box">
      <p>密碼</p>
      <input type="text" placeholder="輸入密碼" v-model="password" />
    </div>
    <div class="input-box flex-center">
      <input type="checkbox" id="checkbox" class="mr-10px" v-model="terms" />
      <label for="checkbox">我已閱讀使用者條款</label>
    </div>
    <button class="btn" @click="handFromFn">登入</button>
  </div>
</template>
<style>
p,
label {
  color: white;
  margin-bottom: 5px;
}
img.logo {
  width: 200px;
  margin: 0 auto 40px auto;
  display: block;
}
input[type="text"] {
  width: 250px;
  height: 35px;
  padding-left: 15px;
  border-radius: 50px;
  border: 0px;
}
.input-box {
  margin-bottom: 20px;
}
.flex-center {
  display: flex;
  justify-content: center;
}
.mr-10px {
  margin-right: 10px;
}
</style>
