import { allPokemonNames } from "../../../variables/allPokemonNames.js";

export const checkIfPokemonExists = (pokemon) => {
    let pokemonExists = false;
    
    if(!isNaN(pokemon)) {
        const pokemonIndex = pokemon - 1;
        pokemon = allPokemonNames[pokemonIndex];
    }

    if(allPokemonNames.includes(pokemon)) {
        pokemonExists = true;
    }

    return pokemonExists;
}