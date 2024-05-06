import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";
import axios from "axios";
export const useHomeStore = defineStore("home", () => {
  const router = useRouter();

  const coursesArr = ref([]);

  const coursesList = computed(() => coursesArr.value);

  const gotoCourses = (id) => {
    router.push(`/courses/${id}`);
  };

  const getCourseData = async () => {
    try {
      const res = await axios.get("https://vue-lessons-api.vercel.app/courses/list");
      coursesArr.value = res.data;
    } catch (error) {
      console.error(error);
    }
  };

  return { coursesArr, coursesList, gotoCourses, getCourseData };
});
