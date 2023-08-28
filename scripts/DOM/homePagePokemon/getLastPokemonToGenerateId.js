import { LAST_BASE_FORM_POKEMON_ID } from "../../variables/lastBaseFormPokemonId.js";

export const getLastPokemonToGenerateId = (firstPokemonToGenerateId,
    lastPokemonIdInGeneration = LAST_BASE_FORM_POKEMON_ID) => {
        const POKEMON_PER_RENDER = 9;
        let lastPokemonToGenerateId = firstPokemonToGenerateId + POKEMON_PER_RENDER - 1;

        if(lastPokemonToGenerateId > lastPokemonIdInGeneration) {
            lastPokemonToGenerateId = lastPokemonToGenerateId 
                - (lastPokemonToGenerateId - lastPokemonIdInGeneration);
        }

        return lastPokemonToGenerateId;
}