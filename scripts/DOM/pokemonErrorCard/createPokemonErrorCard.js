import { createPokemonErrorCardHeader } from "./createPokemonErrorCardHeader.js";
import { createPokemonErrorCardBody } from "./createPokemonErrorCardBody.js";


export const createPokemonErrorCard = (error) => {
    const [status, name] = error;
    const pokemonErrorCardHeader = createPokemonErrorCardHeader(status);
    const pokemonErrorCardBody = createPokemonErrorCardBody(name);

    const pokemonErrorCard = 
    `<div class="card" data-error="true">
        ${pokemonErrorCardHeader}
        ${pokemonErrorCardBody}
    </div>`;

    return pokemonErrorCard;
}