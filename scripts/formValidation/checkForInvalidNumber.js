export const checkForInvalidNumber = (number, minRange, maxRange) => {
    let isInvalidValidNumber = true;

    if(isNaN(number)) return isInvalidValidNumber;

    if(number >= minRange && number <= maxRange) {
        isInvalidValidNumber = false;
    }

    return isInvalidValidNumber;
}