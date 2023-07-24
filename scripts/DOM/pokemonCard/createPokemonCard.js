import { createPokemonCardHeader } from "./createPokemonCardHeader.js";
import { createPokemonCardBody } from "./createPokemonCardBody.js";
import { getPokemonTypes } from "../../utils/getPokemonTypes.js";

export const createPokemonCard = (fetchedPokemonData, isPokemonFromCache) => {
    let frontImageUrl = "";
    let pokemonName = fetchedPokemonData.name;
    let pokemonTypes = [];

    if(isPokemonFromCache) {
        frontImageUrl = fetchedPokemonData.sprites[0];
        pokemonTypes = fetchedPokemonData.types;
    }
    else {
        frontImageUrl = fetchedPokemonData.sprites.other["official-artwork"].front_default;
        pokemonTypes = getPokemonTypes(fetchedPokemonData);
    }
    
    const pokemonCardHeader = createPokemonCardHeader(frontImageUrl, pokemonName);
    const pokemonCardBody = createPokemonCardBody(pokemonName, pokemonTypes);
    
    const card = `<div class="card" data-pokemon-name="${fetchedPokemonData.name}" 
        data-pokemon-id="${fetchedPokemonData.id}" data-error="false">
            ${pokemonCardHeader}
            ${pokemonCardBody}
        </div>
    `;

    return card;
}