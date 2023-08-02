export const createDebounce = (func, delay) => {
    let timerId;
    
    const debounce = () => {
        clearTimeout(timerId);
        timerId = setTimeout(func, delay);
    }
    
    debounce();
}