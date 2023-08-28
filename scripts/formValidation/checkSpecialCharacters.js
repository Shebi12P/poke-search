export const checkForSpecialCharacters = (text, whiteListPattern) => {
    let hasSpecialCharacters = false;
    const specialCharactersPattern = /[^A-Za-z0-9]+/;
    
    if(specialCharactersPattern.test(text)) {
        hasSpecialCharacters = true;
    }

    if(whiteListPattern.test(text)) {
        hasSpecialCharacters = false;
    }

    return hasSpecialCharacters;
}