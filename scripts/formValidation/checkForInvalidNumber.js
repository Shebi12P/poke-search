export const checkForInvalidNumber = (number, minRange, maxRange) => {
    let isValidNumber = false;

    if(isNaN(number)) return isValidNumber;

    if(number < minRange || number > maxRange) {
        isValidNumber = true;
    }

    return isValidNumber;
}