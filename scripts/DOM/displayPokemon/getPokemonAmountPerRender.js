import { getLastPokemonIdFromCache } from "../../cache/getLastPokemonIdFromCache.js";

export const getPokemonAmountPerRender = (lastPokemonCardId) => {
    let pokemonPerRender = 9;
    const lastPokemonId = getLastPokemonIdFromCache();
    const numberOfPokemonForLastRender = lastPokemonId % pokemonPerRender;
    const lastPokemonIdWithFullRender = lastPokemonId - (numberOfPokemonForLastRender);

    if(lastPokemonCardId === lastPokemonIdWithFullRender) {
        pokemonPerRender = numberOfPokemonForLastRender;
    }

    return pokemonPerRender;
}