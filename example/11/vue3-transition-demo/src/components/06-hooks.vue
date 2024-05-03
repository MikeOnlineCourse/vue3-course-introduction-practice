<script setup>
// 在元素插入到 DOM 之前被調用
// 用這個來設定元素的 "enter-from" 狀態
const onBeforeEnter = (el) => {};

// 在元素被插入到 DOM 之後的下一幀被調用
// 用這個來開始進入動畫
const onEnter = (el, done) => {
  // 呼叫 done 表示過渡結束
  // 如果與 CSS 結合使用，則這個回呼是可選參數
  done();
};
// 當進入過渡完成時呼叫。
const onAfterEnter = (el) => {};

// 當進入過渡在完成之前被取消時調用
const onEnterCancelled = (el) => {};

// 在 leave 之前呼叫
// 大多數時候，你應該只會用到 leave
const onBeforeLeave = (el) => {};

// 在離開過渡開始時呼叫
// 用這個來開始離開動畫
const onLeave = (el, done) => {
  // 呼叫 done 表示過渡結束
  // 如果與 CSS 結合使用，則這個回呼是可選參數
  done();
};
// 在離開過渡完成、
// 且元素已從 DOM 移除時調用
const onAfterLeave = (el) => {};

// 僅在 v-show 過渡中可用
const onLeaveCancelled = (el) => {};
</script>
<template>
  <div>
    <Transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @enter-cancelled="onEnterCancelled"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
      @leave-cancelled="onLeaveCancelled"
    >
    </Transition>
  </div>
</template>
<style></style>
