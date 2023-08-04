export const checkForSpecialCharacters = (text) => {
    let hasSpecialCharacters = false;
    const specialCharactersPattern = /[^A-Za-z0-9]+/;
    const whiteListCharacter = /[A-Za-z]+-[A-Za-z0-9]+/;
    
    if(specialCharactersPattern.test(text)) {
        hasSpecialCharacters = true;
    }

    if(whiteListCharacter.test(text)) {
        hasSpecialCharacters = false;
    }

    return hasSpecialCharacters;
}