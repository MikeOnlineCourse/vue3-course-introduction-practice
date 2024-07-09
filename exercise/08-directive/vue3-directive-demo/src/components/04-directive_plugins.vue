<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const postCard = ref([]);
onMounted(() => {
  axios.get("https://vue-lessons-api.vercel.app/post/card").then((res) => {
    postCard.value = res.data;
  });
});
</script>
<template>
  <div class="content">
    <div class="card" v-for="card in postCard" :key="card.id">
      <header>
        <img class="avatar" :src="card.avatar" />
        <div>
          <h1>{{ card.name }}</h1>
          <p>
            {{ card.createdAt }}
          </p>
        </div>
      </header>
      <p class="content">{{ card.content }}</p>
      <div class="img_box">
        <img class="post_photo" :src="card.photo" alt="" />
      </div>
    </div>
  </div>
</template>

<style>
img {
  display: block;
}

.content {
  width: 100%;
  height: 100%;
  padding-top: 50px;
}

.card {
  width: 640px;
  height: auto;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  margin: 0 auto 30px auto;
}
.card header {
  display: flex;
  padding: 10px 10px 0px 10px;
  margin: 0 0 5px 0;
  color: #666;
}
.card header h1 {
  font-size: 15px;
}
.card header p {
  font-size: 13px;
}
.card p.content {
  font-size: 14px;
  padding: 0px 10px 10px 10px;
  color: #666;
}

.img_box {
  width: 640px;
  height: 480px;
}

img.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 10px;
}
img.post_photo {
  width: 640px;
  height: 480px;
}
</style>
