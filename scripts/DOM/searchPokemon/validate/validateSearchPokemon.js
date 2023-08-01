import { checkForSpecialCharacters } from "./checkSpecialCharacters.js";
import { checkForNumbersAndLettersBesideEachOther } from "./checkForNumbersAndLettersBesideEachOther.js";
import { isEmpty } from "./isEmpty.js";
import { checkForInvalidNumber } from "./checkForInvalidNumber.js";
import { LAST_BASE_FORM_POKEMON_ID } from "../../../variables/lastBaseFormPokemonId.js";

export const validateSearchPokemon = (searchedPokemon) => {
    let hasErrorOccured = false;
    let errorMessage = "";
    
    if(checkForNumbersAndLettersBesideEachOther(searchedPokemon)) {
        hasErrorOccured = true;
        errorMessage = "Input accepts only numbers or letters.";
        // return [hasErrorOccured, errorMessage];
    }

    if(checkForSpecialCharacters(searchedPokemon)) {
        hasErrorOccured = true;
        errorMessage = "Input doesn't accept special characters.";
        // return [hasErrorOccured, errorMessage];
    }

    if(checkForInvalidNumber(searchedPokemon)) {
        hasErrorOccured = true;
        errorMessage = `Input accepts numbers beetwen 1 and ${LAST_BASE_FORM_POKEMON_ID}.`;
        // return [hasErrorOccured, errorMessage];
    }

    if(isEmpty(searchedPokemon)) {
        hasErrorOccured = true;
        errorMessage = "Input can't be empty.";
        // return [hasErrorOccured, errorMessage];
    }

    return [hasErrorOccured, errorMessage];
}