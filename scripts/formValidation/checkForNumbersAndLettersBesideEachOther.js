export const checkForNumbersAndLettersBesideEachOther = (text, exeptionList) => {
    let hasNumbersAndLettersBesideEachOther = false;

    if(exeptionList.includes(text) || !isNaN(text)){
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