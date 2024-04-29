export const thousand = {
  mounted(el, binding) {
    console.log("mounted", binding.value);
    el.innerHTML = binding.value.toLocaleString();
  },
  updated(el, binding) {
    console.log("updated", binding.value);
    el.innerHTML = binding.value.toLocaleString();
  },
};
