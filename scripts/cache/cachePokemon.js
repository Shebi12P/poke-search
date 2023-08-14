import { getPokemonTypes } from "../utils/getPokemonTypes.js";
import { getPokemonStats } from "../utils/getPokemonStats.js";
import { getPokemonSprites } from "../utils/getPokemonSprites.js";

export const cachePokemon = (pokemonData) => {
    const { name, id, weight, height } = pokemonData;
    
    const dataToCache = {
        name: name,
        id: id,
        types: getPokemonTypes(pokemonData),
        stats: getPokemonStats(pokemonData),
        weight: weight,
        height: height,
    };

    const stringifedPokemonData = JSON.stringify(dataToCache);
    localStorage.setItem(id, stringifedPokemonData);
}