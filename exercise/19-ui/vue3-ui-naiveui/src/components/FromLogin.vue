<script setup>
import axios from "axios";
// 透過 unplugin 去設定，不需要 import，會自動解析
// import {
//   NInput,
//   NAutoComplete,
//   NInputNumber,
//   NSpace,
//   NRadioGroup,
//   NRadioButton,
//   NCheckbox,
//   NButton,
// } from "naive-ui";

const isReg = ref(false);

const registered = ref({
  username: "",
  password: "",
  sex: "",
  email: "",
  age: 0,
  terms: false,
});

const error_message = ref({});

const emailOptions = computed(() => {
  return ["@gmail.com", "@hotmail.com", "@yahoo.com"].map((suffix) => {
    const prefix = registered.value.email.split("@")[0];
    return {
      label: prefix + suffix,
      value: prefix + suffix,
    };
  });
});

const successFn = () => {
  alert("註冊成功");
  isReg.value = true;
};

const errorFn = (err) => {
  Object.keys(err).forEach((key) => (error_message.value[key] = err[key]));
};

const handRegisteredFn = () => {
  axios
    .post(
      "https://vue-lessons-api.vercel.app/auth/registered",
      registered.value
    )
    .then(() => {
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

        <NInput
          v-model:value="registered.username"
          type="text"
          placeholder="輸入你的姓名"
          :status="error_message.username"
        />

        <p v-if="error_message.username" class="error">
          {{ error_message.username }}
        </p>
      </div>
      <div class="input-box">
        <p>PASSWORD</p>

        <NInput
          v-model:value="registered.password"
          placeholder="輸入你的密碼"
          type="text"
          :status="error_message.password"
        />

        <p v-if="error_message.password" class="error">
          {{ error_message.password }}
        </p>
      </div>
      <div class="input-box">
        <p>E-MAIL</p>
        <NAutoComplete
          v-model:value="registered.email"
          :input-props="{
            autocomplete: 'disabled',
          }"
          :options="emailOptions"
          placeholder="輸入email"
          clearable
          :status="error_message.email"
        />
        <p v-if="error_message.email" class="error">
          {{ error_message.email }}
        </p>
      </div>
      <div class="input-box">
        <p>年齡</p>
        <NInputNumber
          v-model:value="registered.age"
          placeholder="輸入你的年齡"
          clearable
        />
      </div>
      <div class="input-box flex-center">
        <NSpace vertical>
          <NRadioGroup v-model:value="registered.sex" name="radiobuttongroup1">
            <NRadioButton value="boy" label="boy" />
            <NRadioButton value="girl" label="girl" />
          </NRadioGroup>
        </NSpace>
      </div>
      <div class="input-box flex-center">
        <NCheckbox class="mr-10px" v-model:checked="registered.terms">
          <p class="text-white">我已閱讀使用者條款</p>
        </NCheckbox>
      </div>
      <NButton class="btn" type="primary" @click="handRegisteredFn">
        送出
      </NButton>
    </div>
    <div v-if="isReg">
      <h1>註冊成功</h1>
    </div>
  </div>
</template>
<style>
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
p,
label {
  color: white;
}

.input-box {
  margin-bottom: 20px;
}

.text-white {
  color: white;
}

p.error {
  color: rgb(255, 119, 119);
  font-size: 12px;
  padding-top: 4px;
}
</style>
