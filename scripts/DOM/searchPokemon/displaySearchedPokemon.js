import { fetchPokemon } from "../../api/fetchPokemon.js";
import { findPokemonIdFromCache } from "../../cache/findPokemonIdFromCache.js";
import { cachePokemon } from "../../cache/cachePokemon.js";
import { toggleInfoCard } from "../infoCard/toggleInfoCard.js";
import { fetchErrorsOccured } from "../../utils/fetchErrorsOccured.js";
import { isPokemonCashed } from "../../cache/isPokemonCached.js";
import { getPokemonWithAlteredNames } from "./getPokemonWithAlteredNames.js";

export const displaySearchedPokemon = async (event) => {
    event.preventDefault();
    let searchedPokemon = document.querySelector(".search-pokemon-input").value;
    let pokemonId;
    
    if(isPokemonCashed(searchedPokemon)) {
        pokemonId = searchedPokemon;
        toggleInfoCard(event, pokemonId);
        return;
    }

    
    searchedPokemon = searchedPokemon.toLowerCase();
    // getPokemonWithAlteredNames(searchedPokemon);
    pokemonId = findPokemonIdFromCache(searchedPokemon);

    if(pokemonId !== -1) {
        toggleInfoCard(event, pokemonId);
        return;
    }
  
    const fetchedPokemon = await fetchPokemon(searchedPokemon);
        
    if(fetchErrorsOccured(fetchedPokemon)) return;
    
    pokemonId = fetchedPokemon.id;
    cachePokemon(fetchedPokemon);
    toggleInfoCard(event, pokemonId);
}