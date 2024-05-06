<script setup>
// https://vueuse.org/core/useWindowSize/
import { UseWindowSize } from "@vueuse/components";

// import { useWindowSize } from "@vueuse/core";
// const { width, height } = useWindowSize();
</script>
<template>
  <div class="content flex-center flex-col">
    <!-- <h1>{{ width }} x {{ height }}</h1>
    <div v-if="width >= 1600" class="desktop">
      <h1 class="title">桌機</h1>
    </div>
    <div v-if="width > 768 && width < 1600" class="Pad">
      <h1 class="title">平板</h1>
    </div>
    <div v-if="width < 768" class="mobile">
      <h1 class="title">手機</h1>
    </div> -->

    <UseWindowSize v-slot="{ width, height }">
      <h1>{{ width }} x {{ height }}</h1>
      <div v-if="width >= 1600" class="desktop">
        <h1 class="title">桌機</h1>
      </div>
      <div v-if="width > 768 && width < 1600" class="Pad">
        <h1 class="title">平板</h1>
      </div>
      <div v-if="width < 768" class="mobile">
        <h1 class="title">手機</h1>
      </div>
    </UseWindowSize>
  </div>
</template>
<style scoped>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-col {
  flex-direction: column;
}
.content {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("../assets/images/bg.jpg");
  background-size: cover;
}
.title {
  font-size: 70px;
}

.desktop {
  color: red;
}
.Pad {
  color: blue;
}
.mobile {
  color: hotpink;
}
</style>
