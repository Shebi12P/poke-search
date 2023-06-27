import { getPokemonTypes } from "../utils/getPokemonTypes.js";
import { getPokemonStats } from "../utils/getPokemonStats.js";
import { getPokemonSprites } from "../utils/getPokemonSprites.js";

export const cachePokemon = (pokemonData) => {
    const { name, id, weight, height } = pokemonData;

    const dataToCache = {
        id: id,
        name: name,
        types: getPokemonTypes(pokemonData),
        stats: getPokemonStats(pokemonData),
        weight: weight,
        height: height,
        sprites: getPokemonSprites(pokemonData)
    };

    const stringifedPokemonData = JSON.stringify(dataToCache);
    localStorage.setItem(id, stringifedPokemonData);
}