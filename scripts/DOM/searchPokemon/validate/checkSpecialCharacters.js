export const checkForSpecialCharacters = (text) => {
    let hasSpecialCharacters = false;
    const specialCharactersPattern = /[^A-Za-z0-9]+/;

    if(specialCharactersPattern.test(text)) {
        hasSpecialCharacters = true;
    }

    return hasSpecialCharacters;
}