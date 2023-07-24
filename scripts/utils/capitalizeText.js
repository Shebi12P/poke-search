export const capitalizeText = (text) => {
    const upperCasedFirstLetter = text.charAt(0).toUpperCase();
    const restOfTheText = text.slice(1);
    const capitalizedText = upperCasedFirstLetter + restOfTheText;

    return capitalizedText;
}