export const checkForNumbersAndLettersBesideEachOther = (text, exeptionList) => {
    const whiteListPokemonNames = ["porygon2", "zygarde-50"];
    let hasNumbersAndLettersBesideEachOther = false;

    if(exeptionList.includes(text)){
        return false;
    }
    
    const numberAndLetterBesideEachOtherPattern = /\d+\D+/;
    const letterAndNumberBesideEachOtherPattern = /\D+\d+/;
    
    if(numberAndLetterBesideEachOtherPattern.test(text)) {
        hasNumbersAndLettersBesideEachOther = true;
    }

    if(letterAndNumberBesideEachOtherPattern.test(text)) {
        hasNumbersAndLettersBesideEachOther = true;
    }

    return hasNumbersAndLettersBesideEachOther;
}