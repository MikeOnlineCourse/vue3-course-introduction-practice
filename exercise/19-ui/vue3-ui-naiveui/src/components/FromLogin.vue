<script setup>
import { ref } from "vue";
import axios from "axios";

const isReg = ref(false);

const registered = ref({
  username: "",
  password: "",
  sex: "",
  email: "",
  age: "",
  terms: false,
});

const error_message = ref({});

const successFn = () => {
  alert("註冊成功");
  isReg.value = true;
};

const errorFn = (err) => {
  Object.keys(err).forEach((key) => (error_message.value[key] = err[key]));
};

const handRegisteredFn = () => {
  axios
    .post("https://vue-lessons-api.vercel.app/auth/registered", registered)
    .then((res) => {
      successFn();
    })
    .catch((err) => {
      errorFn(err.response.data.error_message);
    });
};
</script>
<template>
  <div>
    <div v-if="!isReg">
      <div class="input-box">
        <p>NAME</p>
        <input type="text" placeholder="輸入使用者名稱" v-model="registered.username" />
        <p v-if="error_message.username" class="error">
          {{ error_message.username }}
        </p>
      </div>
      <div class="input-box">
        <p>PASSWORD</p>
        <input type="password" placeholder="輸入密碼" v-model="registered.password" />
        <p v-if="error_message.password" class="error">
          {{ error_message.password }}
        </p>
      </div>
      <div class="input-box">
        <p>E-MAIL</p>
        <input type="text" placeholder="輸入email" v-model="registered.email" />
        <p v-if="error_message.email" class="error">
          {{ error_message.email }}
        </p>
      </div>
      <div class="input-box">
        <p>年齡</p>
        <input type="number" placeholder="輸入年齡" v-model="registered.age" />
      </div>
      <div class="input-box flex-center">
        <input type="radio" id="boy" value="boy" v-model="registered.sex" />
        <label for="boy">boy</label>
        <input type="radio" id="girl" value="girl" v-model="registered.sex" />
        <label for="girl">girl</label>
      </div>
      <div class="input-box flex-center">
        <input class="mr-10px" type="checkbox" id="checkbox" v-model="registered.terms" />
        <label for="checkbox">我已閱讀使用者條款</label>
      </div>
      <a class="btn" @click="handRegisteredFn">送出</a>
    </div>
    <div v-if="isReg">
      <h1>註冊成功</h1>
    </div>
  </div>
</template>
<style>
p,
label {
  color: white;
  margin-bottom: 3px;
}
input[type="text"],
input[type="password"],
input[type="number"] {
  width: 100%;
  height: 24px;
  padding-left: 5px;
}
.input-box {
  margin-bottom: 20px;
}

input[type="radio"] {
  margin: 0 7px;
}
label {
  margin-right: 15px;
}

p.error {
  color: rgb(255, 119, 119);
  font-size: 12px;
  padding-top: 4px;
}

h1 {
  color: aliceblue;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mr-10px {
  margin-right: 10px;
}
.btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 250px;
  margin: 10px auto 0 auto;
  padding: 10px 0;
  color: white;
  background-color: #47b9a5;
  font-size: 12px;
  border: 0px;
  border-radius: 50px;
}
</style>
