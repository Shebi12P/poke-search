import { fetchPokemon } from "./fetchPokemon.js";
import { cachePokemon } from "../cache/cachePokemon.js";
import { isPokemonCashed } from "../cache/isPokemonCached.js";
import { getPokemonDataFromCache } from "../cache/getPokemonDataFromCache.js";

export const fetchHomePagePokemon = async () => {
    let pokemonLimit = 9;
    
    const fetchedPokemons = [];
    let fetchedPokemon = {};

    for(let i = 0; i < pokemonLimit; i++) {
        let pokemonId = i+1;

        if(isPokemonCashed(pokemonId)) {
            fetchedPokemon = getPokemonDataFromCache(pokemonId);
        }
        else {
            fetchedPokemon = await fetchPokemon(pokemonId);
            cachePokemon(fetchedPokemon);
        }

        fetchedPokemons.push(fetchedPokemon);
    }

    return fetchedPokemons;
}