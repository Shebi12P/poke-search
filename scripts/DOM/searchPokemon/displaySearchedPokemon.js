import { fetchPokemon } from "../../api/fetchPokemon.js";
import { findPokemonIdFromCache } from "../../cache/findPokemonIdFromCache.js";
import { cachePokemon } from "../../cache/cachePokemon.js";
import { toggleInfoCard } from "../infoCard/toggleInfoCard.js";
import { fetchErrorsOccured } from "../../utils/fetchErrorsOccured.js";
import { isPokemonCashed } from "../../cache/isPokemonCached.js";
import { getPokemonWithAlteredNames } from "./getPokemonWithAlteredNames.js";
// import { toggleOverlay } from "../overlay/toggleOverlay.js";

export const displaySearchedPokemon = async (event) => {
    // toggleOverlay();    
    event.preventDefault();
    let searchedPokemon = document.querySelector(".search-pokemon-input").value;
    let pokemonId;
    
    if(isPokemonCashed(searchedPokemon)) {
        pokemonId = searchedPokemon;
        console.log(event);
        toggleInfoCard(event, pokemonId);
        // toggleOverlay();
        return;
    }

    
    searchedPokemon = searchedPokemon.toLowerCase();
    // getPokemonWithAlteredNames(searchedPokemon);
    pokemonId = findPokemonIdFromCache(searchedPokemon);

    if(pokemonId !== -1) {
        // console.log(event);
        toggleInfoCard(event, pokemonId);
        // toggleOverlay();
        return;
    }
  
    const fetchedPokemon = await fetchPokemon(searchedPokemon);
    // toggleOverlay();
        
    if(fetchErrorsOccured(fetchedPokemon)) return;
    
    pokemonId = fetchedPokemon.id;
    cachePokemon(fetchedPokemon);
    toggleInfoCard(event, pokemonId);
}