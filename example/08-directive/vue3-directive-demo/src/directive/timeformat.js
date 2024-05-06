import dayjs from "dayjs";

export const timeformat = {
  mounted(el, binding) {
    const time = dayjs(binding.value).format("YYYY年MM月DD日");
    el.innerText = time;
  },
};
