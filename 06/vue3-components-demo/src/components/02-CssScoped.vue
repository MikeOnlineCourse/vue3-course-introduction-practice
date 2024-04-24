<script setup></script>
<template>
  <div>
    <h1 class="title">
      這是一個標題
      <div>
        <div>
          <div>
            <div>
              <span class="text">深度選擇</span>
            </div>
          </div>
        </div>
      </div>
    </h1>
    <h2 class="title2">這是一個副標題</h2>
  </div>
</template>
<style>
.title2 {
  font-size: 20px;
  color: brown;
}
</style>
<style scoped>
.title {
  font-size: 40px;
  color: blue;
}

.title :deep(.text) {
  color: steelblue;
  font-size: 24px;
}
</style>
