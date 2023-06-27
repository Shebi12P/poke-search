import { createCard } from "../DOM/createCard.js";
import { fetchHomePagePokemon } from "../api/fetchHomePagePokemon.js";

const cardGrid = document.querySelector(".card-grid");

export const displayHomePagePokemon = async () => {
    const pokemons = await fetchHomePagePokemon();
    
    pokemons.forEach((pokemon) => {
        const card = createCard(pokemon);
        cardGrid.appendChild(card);
    })
}
