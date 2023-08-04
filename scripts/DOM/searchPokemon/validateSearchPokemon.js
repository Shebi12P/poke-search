import { checkForInvalidNumber } from "../../formValidation/checkForInvalidNumber.js";
import { checkForNumbersAndLettersBesideEachOther } from "../../formValidation/checkForNumbersAndLettersBesideEachOther.js";
import { checkForSpecialCharacters } from "../../formValidation/checkSpecialCharacters.js";
import { isEmpty } from "../../formValidation/isEmpty.js";
import { LAST_BASE_FORM_POKEMON_ID } from "../../variables/lastBaseFormPokemonId.js";

export const validateSearchPokemon = (searchedPokemon) => {
    let hasErrorOccured = false;
    let errorMessage = "";
    const MIN_RANGE = 1;
    const MAX_RANGE = LAST_BASE_FORM_POKEMON_ID;
    const WHITE_LIST_POKEMON_NAMES = ["porygon2", "zygarde-50"];
    
    if(checkForNumbersAndLettersBesideEachOther(searchedPokemon, WHITE_LIST_POKEMON_NAMES)) {
        hasErrorOccured = true;
        errorMessage = "Input accepts only numbers or letters.";
    }

    if(checkForSpecialCharacters(searchedPokemon)) {
        hasErrorOccured = true;
        errorMessage = "Input doesn't accept special characters.";
    }

    if(checkForInvalidNumber(searchedPokemon, MIN_RANGE, MAX_RANGE)) {
        hasErrorOccured = true;
        errorMessage = `Input accepts numbers beetwen 1 and ${LAST_BASE_FORM_POKEMON_ID}.`;
    }

    if(isEmpty(searchedPokemon)) {
        hasErrorOccured = true;
        errorMessage = "Input can't be empty.";
    }

    return [hasErrorOccured, errorMessage];
}