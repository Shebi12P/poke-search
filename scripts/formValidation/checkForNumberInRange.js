export const checkForNumberInRange = (number, minRange, maxRange) => {
    let isInRange = false;

    if(number >= minRange && number <= maxRange) {
        isInRange = true;
    }

    return isInRange;
}