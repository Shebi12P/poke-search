import { LAST_BASE_FORM_POKEMON_ID } from "../../variables/lastBaseFormPokemonId.js";

export const getPokemonAmountPerRender = (lastPokemonCardId) => {
    let pokemonPerRender = 9;
    const numberOfPokemonForLastRender = LAST_BASE_FORM_POKEMON_ID % pokemonPerRender;
    const lastPokemonIdWithFullRender = LAST_BASE_FORM_POKEMON_ID - (numberOfPokemonForLastRender);

    if(lastPokemonCardId === lastPokemonIdWithFullRender) {
        pokemonPerRender = numberOfPokemonForLastRender;
    }

    return pokemonPerRender;
}