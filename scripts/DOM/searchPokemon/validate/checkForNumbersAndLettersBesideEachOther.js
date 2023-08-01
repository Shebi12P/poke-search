export const checkForNumbersAndLettersBesideEachOther = (text) => {
    let hasNumbersAndLettersBesideEachOther = false;
    
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