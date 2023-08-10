import { LAST_BASE_FORM_POKEMON_ID } from "../../variables/lastBaseFormPokemonId.js";

export const getPokemonAmountPerRender = (firstPokemonToGenerateId,
    lastPokemonIdInGeneration = LAST_BASE_FORM_POKEMON_ID) => {
        let pokemonPerRender = 9;
        const numberOfPokemonForLastRender = lastPokemonIdInGeneration % pokemonPerRender;
        const lastPokemonIdWithFullRender = lastPokemonIdInGeneration - numberOfPokemonForLastRender;
        const previousLastGeneratedPokemon = firstPokemonToGenerateId - 1;

        if(previousLastGeneratedPokemon === lastPokemonIdWithFullRender) {
            pokemonPerRender = numberOfPokemonForLastRender;
        }

        console.log(firstPokemonToGenerateId);

        pokemonPerRender = pokemonPerRender + firstPokemonToGenerateId - 1;

        return pokemonPerRender;
}