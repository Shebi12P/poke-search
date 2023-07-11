import { createCardImage } from "./createCardImage.js";

export const createCardHeader = (imageUrl, pokemonName) => {
    const cardImage = createCardImage(imageUrl, pokemonName);
    const cardHeader = `<div class ="card-header">${cardImage}</div>`;

    return cardHeader;
}