import { allPokemonNames } from "../../variables/allPokemonNames.js";
// import { validateSearchPokemon } from "..//validation/validateSearchPokemon.js";
// import { validateSearchPokemon } from "../../validation/validateSearchPokemon.js";
// import { changeInputValidation } from "../searchPokemon/changeInputvalidation.js";
// import { changeSearchStyle } from "../searchPokemon/changeSearchStyle.js";
// import { changeSearchErrorMessage } from "../searchPokemon/changeSearchErrorMessage.js";

export const findPokemonFromInput = () => {
    const searchedText = document.querySelector(".search-pokemon-input").value;
    // const [ hasErrorOccured ] = validateSearchPokemon(searchedText);

    // changeSearchStyle(hasErrorOccured);
    // changeSearchErrorMessage(errorMessage);
    // changeInputValidation(hasErrorOccured);

    // if(hasErrorOccured) {
    //     const pokemonHintList = document.querySelector();
    //     return;
    // }

    const pattern = new RegExp(`${searchedText}`);
    const allMatchedPokemon = allPokemonNames.filter(pokemonName => pattern.test(pokemonName));

    return allMatchedPokemon;
}