import { fetchPokemon } from "../../api/fetchPokemon.js";
import { findPokemonIdFromCache } from "../../cache/findPokemonIdFromCache.js";
import { cachePokemon } from "../../cache/cachePokemon.js";
import { toggleInfoCard } from "../infoCard/toggleInfoCard.js";
import { fetchErrorsOccured } from "../../utils/fetchErrorsOccured.js";
import { isPokemonCashed } from "../../cache/isPokemonCached.js";
import { getPokemonWithAlteredNames } from "./getPokemonWithAlteredNames.js";
import { validateSearchPokemon } from "./validate/validateSearchPokemon.js";
import { changeSearchStyle } from "./changeSearchStyle.js";
import { changeSearchErrorMessage } from "./changeSearchErrorMessage.js";

export const displaySearchedPokemon = async (event) => {
    event.preventDefault();

    let searchedPokemon = document.querySelector(".search-pokemon-input").value;
    searchedPokemon = searchedPokemon.trim();
    const [hasErrorOccured, errorMessage] = validateSearchPokemon(searchedPokemon);
    
    changeSearchStyle(hasErrorOccured);
    changeSearchErrorMessage(errorMessage);

    if(hasErrorOccured) return;

    event.currentTarget.reset();
    let pokemonId;
    
    if(isPokemonCashed(searchedPokemon)) {
        pokemonId = searchedPokemon;
        toggleInfoCard(event, pokemonId);
        return;
    }

    
    searchedPokemon = searchedPokemon.toLowerCase();
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