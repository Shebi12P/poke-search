import { createCardImage } from "./createCardImage.js";

export const createCardHeader = (imageUrl, pokemonName) => {
    const cardImage = createCardImage(imageUrl, pokemonName);
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.appendChild(cardImage);

    return cardHeader;
}