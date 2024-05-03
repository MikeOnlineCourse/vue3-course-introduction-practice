<script setup>
import TitleBar from "./01/TitleBar.vue";
</script>
<template>
  <div class="demo flex-center flex-col">
    <div class="content">
      <!-- 不透過包裝的方式 -->
      <h1 class="title">
        <img src="../assets/vue.svg" alt="" />
        应用实例
      </h1>
      <p>每个 Vue 应用都是通过 createApp 函数创建一个新的 应用实例：</p>
    </div>
    <div class="content">
      <!-- 使用 slot 包裝 -->
      <TitleBar>根组件</TitleBar>
      <p>我们传入 createApp 的对象实际上是一个组件，每个应用都需要一个“根组件”，其他组件将作为其子组件。 如果你使用的是单文件组件，我们可以直接从另一个文件中导入根组件。</p>
    </div>
    <div class="content">
      <!-- 使用 slot 包裝 -->
      <TitleBar>挂载应用</TitleBar>
      <p>应用实例必须在调用了 .mount() 方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串</p>
    </div>
  </div>
</template>
<style scoped>
h1.title {
  font-size: 26px;
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
