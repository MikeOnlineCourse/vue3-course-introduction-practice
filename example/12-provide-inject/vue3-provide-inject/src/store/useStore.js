import { ref } from "vue";
import axios from "axios";

export const useStore = () => {
  const coursesArr = ref([]);
  const coursesId = ref(0);
  const isOpen = ref(false);

  const getDetal = (id) => {
    coursesId.value = id;
    isOpen.value = true;
  };
  const closePopup = () => {
    coursesId.value = 0;
    isOpen.value = false;
  };
  const openUrl = (url) => {
    window.open(url, "_blank");
  };
  const getDataList = async () => {
    const res = await axios.get("https://vue-lessons-api.vercel.app/courses/list");
    coursesArr.value = res.data;
  };

  return {
    coursesArr,
    coursesId,
    isOpen,
    getDetal,
    closePopup,
    openUrl,
    getDataList,
  };
};
