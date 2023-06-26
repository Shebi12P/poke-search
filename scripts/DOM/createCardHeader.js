import { createCardImage } from "./createCardImage.js";

export const createCardHeader = (imageUrl, pokemonName) => {
    const cardImage = createCardImage(imageUrl, pokemonName);
    const cardHeader = document.createElement("div");
    cardHeader.setAttribute("class", "card-header");
    cardHeader.appendChild(cardImage);

    return cardHeader;
}