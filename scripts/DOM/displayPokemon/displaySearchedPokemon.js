import { fetchPokemon } from "../../api/fetchPokemon.js";
import { findPokemonIdFromCache } from "../../cache/findPokemonIdFromCache.js";
import { cachePokemon } from "../../cache/cachePokemon.js";
import { toggleInfoCard } from "../infoCard/toggleInfoCard.js";

export const displaySearchedPokemon = async (event) => {
    event.preventDefault();
    const pokemonName = document.querySelector(".search-pokemon-input").value.toLowerCase();
    let pokemonId = findPokemonIdFromCache(pokemonName);
    
    if(pokemonId !== -1) {
        toggleInfoCard(event, pokemonId);
    }
  
    const fetchedPokemon = await fetchPokemon(pokemonName);
        
    if(Object.keys(fetchedPokemon).includes("status")) {
        return;
    }
    
    pokemonId = fetchedPokemon.id;
    cachePokemon(fetchedPokemon);
}