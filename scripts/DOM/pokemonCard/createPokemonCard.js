import { createPokemonCardHeader } from "./createPokemonCardHeader.js";
import { createPokemonCardBody } from "./createPokemonCardBody.js";
import { getPokemonTypes } from "../../utils/getPokemonTypes.js";

export const createPokemonCard = (fetchedPokemonData) => {
    const pokemonName = fetchedPokemonData.name;
    const pokemonId = fetchedPokemonData.id;
    let pokemonTypes = fetchedPokemonData.types 
        || getPokemonTypes(fetchedPokemonData);
    
    const pokemonCardHeader = createPokemonCardHeader(pokemonName, pokemonId);
    const pokemonCardBody = createPokemonCardBody(pokemonName, pokemonTypes);
    
    const card = `<div class="card" data-pokemon-name="${fetchedPokemonData.name}" 
        data-pokemon-id="${fetchedPokemonData.id}" data-error="false">
            ${pokemonCardHeader}
            ${pokemonCardBody}
        </div>
    `;

    return card;
}