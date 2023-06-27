import { createCardHeader } from "./createCardHeader.js";
import { createCardBody } from "./createCardBody.js";
import { getPokemonTypes } from "../utils/getPokemonTypes.js";

export const createCard = (fetchedPokemonData) => {
    const imageUrl = fetchedPokemonData.sprites.other["official-artwork"].front_default;
    const pokemonTypes = getPokemonTypes(fetchedPokemonData);

    const { name: pokemonName} = fetchedPokemonData;
    
    const card = document.createElement("div");
    card.classList.add("card");

    const cardHeader = createCardHeader(imageUrl, pokemonName);
    const cardBody = createCardBody(pokemonName, pokemonTypes);

    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    return card;
}