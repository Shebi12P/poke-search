import { fetchPokemon } from "../../api/fetchPokemon.js";
import { cachePokemon } from "../../cache/cachePokemon.js";
import { toggleInfoCard } from "../infoCard/toggleInfoCard.js";
import { fetchErrorsOccured } from "../../utils/fetchErrorsOccured.js";
import { isPokemonCashed } from "../../cache/isPokemonCached.js";
import { validateSearchPokemon } from "./validation/validateSearchPokemon.js";
import { togglePokemonHintList } from "../pokemonHintList/togglePokemonHintList.js";
import { handleInputError } from "./handleInputError.js";

export const displaySearchedPokemon = async (event) => {
    event.preventDefault();
    
    let searchedPokemon = document.querySelector(".search-pokemon-input").value;
    searchedPokemon = searchedPokemon.trim();

    const searchPokemonForm = document.querySelector(".search-pokemon-form");
    searchPokemonForm.reset();
    
    const hidePokemonHintList = true;
    togglePokemonHintList(hidePokemonHintList);
    
    const [ hasErrorOccured, errorMessage ] = validateSearchPokemon(searchedPokemon);
    handleInputError(hasErrorOccured, errorMessage);

    if(hasErrorOccured) return;

    let pokemonId;
    
    if(isPokemonCashed(searchedPokemon)) {
        pokemonId = searchedPokemon;
        toggleInfoCard(event, pokemonId);
        return;
    }

    searchedPokemon = searchedPokemon.toLowerCase();
    const fetchedPokemon = await fetchPokemon(searchedPokemon);
        
    if(fetchErrorsOccured(fetchedPokemon)) return;
    
    pokemonId = fetchedPokemon.id;
    cachePokemon(fetchedPokemon);
    toggleInfoCard(event, pokemonId);
}