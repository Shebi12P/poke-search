import { isPokemonCashed } from "./isPokemonCached.js";

export const getPokemonDataFromCache = (pokemonId) => {
    let pokemonData = null;
    
    if(!isPokemonCashed(pokemonId)) {
        return pokemonData;
    }

    pokemonData = localStorage.getItem(pokemonId);
    pokemonData = JSON.parse(pokemonData);

    return pokemonData;
}