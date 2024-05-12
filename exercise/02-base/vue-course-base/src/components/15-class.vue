<script setup></script>
<template>
  <div>
    <ul>
      <li>
        <a class=""> 首頁 </a>
      </li>
      <li>
        <a class="" "> 關於我們 </a>
      </li>
      <li>
        <a class="active" > 商品列表 </a>
      </li>
      <li>
        <a class="" > 歷史沿革 </a>
      </li>
      <li>
        <a class="" > 未來藍圖 </a>
      </li>
    </ul>
  </div>
</template>
<style>
a {
  cursor: pointer;
  color: #888;
}

a.active {
  color: red;
}

a:hover {
  color: red;
}
</style>
