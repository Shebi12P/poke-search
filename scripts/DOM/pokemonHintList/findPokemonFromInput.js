import { isEmpty } from "../../formValidation/isEmpty.js";
import { allPokemonNames } from "../../variables/allPokemonNames.js";

export const findPokemonFromInput = () => {
    const searchedText = document.querySelector(".search-pokemon-input").value;
    
    if(isEmpty(searchedText)) {
        return [];
    }

    const pattern = new RegExp(`${searchedText}`);
    const allMatchedPokemon = allPokemonNames.filter(pokemonName => pattern.test(pokemonName));

    return allMatchedPokemon;
}