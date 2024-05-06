<script setup>
import { ref } from "vue";

const courseslist = ref({
  checkItem: [],
  tags: [
    { tag: "JavaScript" },
    { tag: "Html" },
    { tag: "Css" },
    { tag: "Html5" },
    { tag: "Vuejs" },
    { tag: "React" },
    { tag: "Sass" },
    { tag: "Css3" },
    { tag: "Canvas" },
  ],
});
const handSelectCheck = () => {
  console.log(courseslist.value.checkItem);
};
</script>
<template>
  <div>
    <ul>
      <li v-for="item in courseslist.tags" :key="item.tag">
        <input
          type="checkbox"
          :id="item.tag"
          :value="item.tag"
          v-model="courseslist.checkItem"
        />
        <label :for="item.tag">{{ item.tag }}</label>
      </li>
    </ul>
    <a class="btn" @click="handSelectCheck">送出</a>
  </div>
</template>
<style>
input {
  margin-right: 10px;
}
p,
label,
span {
  color: white;
  margin-bottom: 3px;
}

li {
  list-style: none;
  margin-bottom: 5px;
}
</style>
