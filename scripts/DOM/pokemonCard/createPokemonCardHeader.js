import { createPokemonCardImage } from "./createPokemonCardImage.js";

export const createPokemonCardHeader = (pokemonName, pokemonId) => {
    const cardImage = createPokemonCardImage(pokemonName, pokemonId);
    const cardHeader = `<div class ="card-header">${cardImage}</div>`;

    return cardHeader;
}