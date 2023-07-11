import { createCardHeader } from "./createCardHeader.js";
import { createCardBody } from "./createCardBody.js";
import { getPokemonTypes } from "../../utils/getPokemonTypes.js";

export const createCard = (fetchedPokemonData, isPokemonFromCache) => {
    let frontImageUrl = "";
    let pokemonName = "";
    let pokemonTypes = [];

    if(isPokemonFromCache) {
        frontImageUrl = cacheData.sprites[0];
        pokemonName = cacheData.name;
        pokemonTypes = cacheData.types;
    }
    else {
        frontImageUrl = fetchedPokemonData.sprites.other["official-artwork"].front_default;
        pokemonName = fetchedPokemonData.name;
        pokemonTypes = getPokemonTypes(fetchedPokemonData);
    }
    const cardHeader = createCardHeader(frontImageUrl, pokemonName);
    const cardBody = createCardBody(pokemonName, pokemonTypes);
    
    const card = `<div class="card" data-pokemon-name="${fetchedPokemonData.name}" 
        data-pokemon-id="${fetchedPokemonData.id}">
            ${cardHeader}
            ${cardBody}
        </div>
    `;

    return card;
}