import { fetchPokemon } from "../../api/fetchPokemon.js";
import { findPokemonIdFromCache } from "../../cache/findPokemonIdFromCache.js";
import { cachePokemon } from "../../cache/cachePokemon.js";
import { toggleInfoCard } from "../infoCard/toggleInfoCard.js";

export const displaySearchedPokemon = async (event) => {
    event.preventDefault();
    const pokemonName = document.querySelector(".search-pokemon-input").value.toLowerCase();
    let pokemonId = findPokemonIdFromCache(pokemonName);
    console.log(pokemonId);
    let pokemon = {};
    
    if(pokemonId === -1) {
        pokemon = await fetchPokemon(pokemonName);
        pokemonId = pokemon.id;
        cachePokemon(pokemon);
    }
    
    toggleInfoCard(event, pokemonId);
}