<script setup></script>
<template>
  <div class="demo flex-center flex-col">
    <div class="content">
      <h1 class="title">
        <img src="../assets/vue.svg" alt="" />
        應用實例
      </h1>
      <p>每個 Vue 應用程式都是透過 createApp 函數建立一個新的 應用程式實例 ：</p>
    </div>
    <div class="content">
      <h1 class="title">
        <img src="../assets/vue.svg" alt="" />
        根组件
      </h1>
      <p>
        我們傳入 createApp 的物件實際上是一個元件，每個應用程式都需要一個“根元件”，其他元件將作為其子元件。
        如果你使用的是單一檔案元件，我們可以直接從另一個檔案匯入根元件。
      </p>
    </div>
    <div class="content">
      <h1 class="title">
        <img src="../assets/vue.svg" alt="" />
        掛載應用
      </h1>
      <p>
        應用實例必須在呼叫了 .mount() 方法後才會渲染出來。此方法接收一個「容器」參數，可以是一個實際的 DOM 元素或是一個
        CSS 選擇器字串
      </p>
    </div>
  </div>
</template>
<style scoped>
h1.title {
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
h1.title > img {
  margin-right: 10px;
}
p {
  font-size: 20px;
  color: #fff;
}
.content {
  margin-bottom: 50px;
}
</style>
