import { createCardHeader } from "./createCardHeader.js";
import { createCardBody } from "./createCardBody.js";
import { getPokemonTypes } from "../../utils/getPokemonTypes.js";
import { getPokemonDataFromCache } from "../../cache/getPokemonDataFromCache.js";

export const createCard = (fetchedPokemonData, isPokemonFromCache) => {
    let frontImageUrl = "";
    let pokemonName = "";
    let pokemonTypes = [];

    if(isPokemonFromCache) {
        const cacheData = getPokemonDataFromCache(fetchedPokemonData.id);
        frontImageUrl = cacheData.sprites[0];
        pokemonName = cacheData.name;
        pokemonTypes = cacheData.types;
    }
    else {
        frontImageUrl = fetchedPokemonData.sprites.other["official-artwork"].front_default;
        pokemonName = fetchedPokemonData.name;
        pokemonTypes = getPokemonTypes(fetchedPokemonData);
    }
    
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-pokemon-name", fetchedPokemonData.name);
    card.setAttribute("data-pokemon-id", fetchedPokemonData.id);

    const cardHeader = createCardHeader(frontImageUrl, pokemonName);
    const cardBody = createCardBody(pokemonName, pokemonTypes);

    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    return card;
}