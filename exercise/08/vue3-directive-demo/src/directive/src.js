import errorImg from "../assets/error.png";

export const src = (el, binding) => {
  const img = new Image();
  img.src = binding.value;
  img.onload = () => {
    el.src = binding.value;
  };
  img.onerror = () => {
    el.src = errorImg;
  };
};
