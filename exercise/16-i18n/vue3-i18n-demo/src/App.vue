<script setup></script>

<template>
  <div class="content">
    <nav>
      <select>
        <option>zh-TW</option>
        <option>en-US</option>
        <option>ja-JP</option>
      </select>
    </nav>
    <p>取消</p>
    <p>Email信箱</p>
    <p>日期</p>
    <p>標題</p>
    <p>訊息內容</p>
    <p>上傳</p>
    <div>
      <!-- 帶入參數填空 { 物件 } -->
      <p>大家好，我是{name}, 今天上的這堂課很有趣，我學到了很多東西。</p>

      <!-- 帶入參數填空 [ 陣列 ] -->
      <p>你今天獲得了{0}個積分，你還有{1}天到期。</p>
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: "微軟正黑體";
  background-color: #888;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-col {
  flex-direction: column;
}
.content {
}
select {
  width: 200px;
  height: 40px;
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
}
p {
  color: #fff;
  font-size: 30px;
  margin-bottom: 30px;
}
</style>
