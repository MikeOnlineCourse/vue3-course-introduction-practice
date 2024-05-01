import { ref } from "vue";

export const useImgLoad = (imgUrl) => {
  const images = ref(null);
  const error = ref("");
  const isLoad = ref(true);

  const img = new Image();
  img.src = imgUrl;

  img.onload = () => {
    images.value = imgUrl;
    isLoad.value = false;
  };
  img.onerror = () => {
    error.value = "圖片載入失敗";
  };

  return { images, isLoad, error };
};
