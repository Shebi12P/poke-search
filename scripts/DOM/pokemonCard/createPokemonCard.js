import { createPokemonCardHeader } from "./createPokemonCardHeader.js";
import { createPokemonCardBody } from "./createPokemonCardBody.js";
import { getPokemonTypes } from "../../utils/getPokemonTypes.js";

export const createPokemonCard = (fetchedPokemonData, isPokemonFromCache) => {
    let frontImageUrl = "";
    let pokemonName = "";
    let pokemonTypes = [];

    if(isPokemonFromCache) {
        frontImageUrl = fetchedPokemonData.sprites[0];
        pokemonName = fetchedPokemonData.name;
        pokemonTypes = fetchedPokemonData.types;
    }
    else {
        frontImageUrl = fetchedPokemonData.sprites.other["official-artwork"].front_default;
        pokemonName = fetchedPokemonData.name;
        pokemonTypes = getPokemonTypes(fetchedPokemonData);
    }
    
    const pokemonCardHeader = createPokemonCardHeader(frontImageUrl, pokemonName);
    const pokemonCardBody = createPokemonCardBody(pokemonName, pokemonTypes);
    
    const card = `<div class="card" data-pokemon-name="${fetchedPokemonData.name}" 
        data-pokemon-id="${fetchedPokemonData.id}">
            ${pokemonCardHeader}
            ${pokemonCardBody}
        </div>
    `;

    return card;
}