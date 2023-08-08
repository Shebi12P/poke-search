import { checkForNumberInRange } from "../../../formValidation/checkForNumberInRange.js";
import { checkForNumbersAndLettersBesideEachOther } from "../../../formValidation/checkForNumbersAndLettersBesideEachOther.js";
import { checkForSpecialCharacters } from "../../../formValidation/checkSpecialCharacters.js";
import { isEmpty } from "../../../formValidation/isEmpty.js";
import { LAST_BASE_FORM_POKEMON_ID } from "../../../variables/lastBaseFormPokemonId.js";
import { checkIfPokemonExists } from "./checkIfPokemonExists.js";

export const validateSearchPokemon = (searchedPokemon) => {
    let hasErrorOccured = true;
    let errorMessage = "";
    const MIN_RANGE = 1;
    const MAX_RANGE = LAST_BASE_FORM_POKEMON_ID;
    const WHITE_LIST_POKEMON_NAMES = ["porygon2", "zygarde-50"];
    const WHITE_LIST_PATTERN = /-/;
    
    
    if(isEmpty(searchedPokemon)) {
        errorMessage = "Input can't be empty.";

        return [hasErrorOccured, errorMessage];
    }
    
    if(checkForNumbersAndLettersBesideEachOther(searchedPokemon, WHITE_LIST_POKEMON_NAMES)) {
        errorMessage = "Input accepts only numbers or pokemon names.";

        return [hasErrorOccured, errorMessage];
    }
    
    if(checkForSpecialCharacters(searchedPokemon, WHITE_LIST_PATTERN)) {
        errorMessage = `Input accepts only "-" as a special character.`;

        return [hasErrorOccured, errorMessage];
    }
    
    if(!checkForNumberInRange(searchedPokemon, MIN_RANGE, MAX_RANGE) && !isNaN(searchedPokemon)) {
        errorMessage = `Input accepts numbers beetwen 1 and ${LAST_BASE_FORM_POKEMON_ID}.`;

        return [hasErrorOccured, errorMessage];
    }

    
    if(!checkIfPokemonExists(searchedPokemon)) {
        errorMessage = "Pokemon doesn't exist. Check if you typed the name correctly.";

        return [hasErrorOccured, errorMessage];
    }

    hasErrorOccured = false;
    
    return [hasErrorOccured, errorMessage];
}