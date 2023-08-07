import { checkForNumberInRange } from "../../formValidation/checkForNumberInRange.js";
import { isEmpty } from "../../formValidation/isEmpty.js";
import { allPokemonNames } from "../../variables/allPokemonNames.js";
import { LAST_BASE_FORM_POKEMON_ID } from "../../variables/lastBaseFormPokemonId.js";

export const findPokemonFromInput = () => {
    const searchedText = document.querySelector(".search-pokemon-input").value;
    const firstPokemonId = 1;
    let allMatchedPokemon;
    
    if(isEmpty(searchedText)) {
        return [];
    }

    if(!isNaN(searchedText) && checkForNumberInRange(searchedText, firstPokemonId, LAST_BASE_FORM_POKEMON_ID)) {
        const pokemonNameIndex = searchedText - 1;
        allMatchedPokemon = allPokemonNames[pokemonNameIndex];
        return [allMatchedPokemon];
    }

    const pattern = new RegExp(`${searchedText}`);
    allMatchedPokemon = allPokemonNames.filter(pokemonName => pattern.test(pokemonName));

    return allMatchedPokemon;
}