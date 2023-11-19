export function debounce(callback: Function, delay: number) {
  let timer = null;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
