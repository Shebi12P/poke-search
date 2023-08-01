import { LAST_BASE_FORM_POKEMON_ID } from "../../../variables/lastBaseFormPokemonId.js";

export const checkForInvalidNumber = (number) => {
    let isValidNumber = false;
    const MIN_RANGE = 1;
    const MAX_RANGE = LAST_BASE_FORM_POKEMON_ID;

    if(isNaN(number)) return isValidNumber;

    if(MIN_RANGE > number || number > MAX_RANGE) {
        isValidNumber = true;
    }

    return isValidNumber;
}