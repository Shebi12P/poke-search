import { populateErrorCard } from "../DOM/errorCard/populateErrorCard.js";
import { toggleErrorCard } from "../DOM/errorCard/toggleErrorCard.js";
import { handleFetchErrors } from "./handleFetchErrors.js";

export const fetchPokemon = async (pokemon) => {
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    let fetchUrl = `${BASE_URL}${pokemon}`;
    console.log(fetchUrl);

    const response = await fetch(fetchUrl);
    
    if(!response.ok) {
        const error = handleFetchErrors(response.status);
        populateErrorCard(error);
        toggleErrorCard();
        return error;
    }

    const fetchedPokemon = await response.json();

    return fetchedPokemon;
}