import { createCardHeader } from "./createCardHeader.js";
import { createCardBody } from "./createCardBody.js";

export const createCard = (fetchedPokemonData) => {
    const imageUrl = fetchedPokemonData.sprites.other["official-artwork"].front_default;
    const pokemonTypes = [
        fetchedPokemonData.types["0"].type.name,
        fetchedPokemonData.types["1"].type.name
    ]
    const { name: pokemonName} = fetchedPokemonData;
    
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const cardHeader = createCardHeader(imageUrl, pokemonName);
    const cardBody = createCardBody(pokemonName, pokemonTypes);

    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    return card;
}