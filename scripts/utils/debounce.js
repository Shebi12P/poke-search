let timerId;

export const debounce = (func, delay) => {
    clearTimeout(timerId);

    timerId = setTimeout(func, delay);
}