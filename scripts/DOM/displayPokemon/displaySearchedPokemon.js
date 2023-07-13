import { fetchPokemon } from "../../api/fetchPokemon.js";
import { isPokemonCashed } from "../../cache/isPokemonCached.js";
import { findPokemonIdFromString } from "../../utils/findPokemonIdFromString.js";
import { getPokemonDataFromCache } from "../../cache/getPokemonDataFromCache.js";
import { cachePokemon } from "../../cache/cachePokemon.js";

export const displaySearchedPokemon = async (event) => {
    event.preventDefault();
    const pokemonName = document.querySelector(".pokemon-search").value;
    const pokemonId = findPokemonIdFromString(pokemonName);
    if(!pokemonId) return;
    let pokemon = {};
    let from = ""; 
    
    if(isPokemonCashed(pokemonId)) {
        pokemon = getPokemonDataFromCache(pokemonId);
        from = "cache";
    }
    else {
        pokemon = await fetchPokemon(pokemonId);
        from ="api"
        cachePokemon(pokemon);
    }

    console.log(`${pokemon.name} from ${from}`);
}