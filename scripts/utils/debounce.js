export const debounce = (dallbackFunction, delay) => {
    let timerId;
    
    
    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            dallbackFunction(...args);
        }, delay);
    }    
}