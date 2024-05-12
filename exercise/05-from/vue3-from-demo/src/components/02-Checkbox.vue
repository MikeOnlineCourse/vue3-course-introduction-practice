<script setup>
import { ref } from "vue";

const courseslist = ref({
  checkItem: [],
  tags: [{ tag: "JavaScript" }, { tag: "Html" }, { tag: "Css" }, { tag: "Html5" }, { tag: "Vuejs" }, { tag: "React" }, { tag: "Sass" }, { tag: "Css3" }, { tag: "Canvas" }],
});

const handSelectCheck = () => {
  console.log(courseslist.value.checkItem);
};
</script>
<template>
  <div>
    <ul>
      <li>
        <input type="checkbox" />
        <label for=""></label>
      </li>
    </ul>
    <a class="btn">送出</a>
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
