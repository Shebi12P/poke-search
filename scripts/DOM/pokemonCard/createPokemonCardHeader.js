import { createPokemonCardImage } from "./createPokemonCardImage.js";

export const createPokemonCardHeader = (imageUrl, pokemonName) => {
    const cardImage = createPokemonCardImage(imageUrl, pokemonName);
    const cardHeader = `<div class ="card-header">${cardImage}</div>`;

    return cardHeader;
}