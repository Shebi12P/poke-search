import { createCardHeader } from "./createCardHeader.js";
import { createCardBody } from "./createCardBody.js";

export const createCard = (fetchedPokemonData) => {
    const imageUrl = fetchedPokemonData.sprites.other["official-artwork"].front_default;
    const {name: pokemonName} = fetchedPokemonData;
    
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const cardHeader = createCardHeader(imageUrl, pokemonName);
    const cardBody = createCardBody(pokemonName);

    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    return card;
}