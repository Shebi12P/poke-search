import { createCard } from "./createCard.js";
import { fetchHomePagePokemon } from "../api/fetchHomePagePokemon.js";

const cardGrid = document.querySelector(".card-grid");

export const displayHomePagePokemon = async () => {
    const fetchedPokemons = await fetchHomePagePokemon();
    
    fetchedPokemons.forEach((fetchedPokemon) => {
        const card = createCard(fetchedPokemon);
        cardGrid.appendChild(card);
    })
}
