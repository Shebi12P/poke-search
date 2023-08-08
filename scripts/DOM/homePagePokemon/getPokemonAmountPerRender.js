import { LAST_BASE_FORM_POKEMON_ID } from "../../variables/lastBaseFormPokemonId.js";

export const getPokemonAmountPerRender = (lastPokemonCardId, lastPokemonIdInGeneration) => {
    let pokemonPerRender = 9;
    let numberOfPokemonForLastRender = LAST_BASE_FORM_POKEMON_ID % pokemonPerRender;
    let lastPokemonIdWithFullRender = LAST_BASE_FORM_POKEMON_ID - numberOfPokemonForLastRender;

    if(lastPokemonIdInGeneration) {
        // const lastPokemonIdInGeneration = document.querySelector("[data-current-generation]")
        //     .getAttribute("data-last-pokemon-id-in-generation");
        numberOfPokemonForLastRender = lastPokemonIdInGeneration % pokemonPerRender;
        lastPokemonIdWithFullRender = lastPokemonIdInGeneration - numberOfPokemonForLastRender;
    }

    if(lastPokemonCardId === lastPokemonIdWithFullRender) {
        pokemonPerRender = numberOfPokemonForLastRender;
    }

    return pokemonPerRender;
}