export const debounce = (func: () => void, timeout = 400) => {
  let timer: string | number | NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
      console.log('Debounce callback called!');
    }, timeout);
  };
}
