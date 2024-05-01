import { onMounted, onUnmounted } from "vue";

export function useKeyBoard(event, code, callback) {
  const handleKeyUp = (e) => {
    if (e.code === code) {
      callback();
    }
  };

  onMounted(() => {
    window.addEventListener(event, handleKeyUp);
  });
  onUnmounted(() => {
    window.removeEventListener(event, handleKeyUp);
  });
}
