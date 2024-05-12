<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import CardBox from "./04/CardBox.vue";

const coursesArr = ref([]);

const handleClickCard = (id) => {
  console.log("id=>", id);
};

const handleMore = (path) => {
  console.log("path=>", path);
};

onMounted(() => {
  axios.get("https://vue-lessons-api.vercel.app/courses/list").then((res) => {
    coursesArr.value = res.data;
  });
});
</script>
<template>
  <div class="flex-between mt-40px">
    <CardBox />
  </div>
</template>
<style scoped>
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

.mt-40px {
  margin-top: 40px;
}
</style>
