import { getLastPokemonCardId } from "../../utils/getLastPokemonCardId.js";
import { displayHomePagePokemon } from "./displayHomePagePokemon.js";
import { handlePokemonVisibility } from "../../utils/handlePokemonVisibility.js";
import { loadNewPokemonObserver } from "../../observers/loadNewPokemonObserver.js";

// const pokemonVisibilityObserver = new IntersectionObserver(handlePokemonVisibility);
export const loadNewPokemon = async (entries) => {
    let lastPokemonCard = entries[0];
    const isLastPokemonCardIntersecting = lastPokemonCard.isIntersecting;

    if(isLastPokemonCardIntersecting) {
        loadNewPokemonObserver.unobserve(lastPokemonCard.target);
        const lastPokemonCardId = getLastPokemonCardId();
        await displayHomePagePokemon(lastPokemonCardId);
        
        const cardList = document.querySelector(".card-list");
        const newLastCard = cardList.lastChild;
        loadNewPokemonObserver.observe(newLastCard);
    }

    // let pokemonCards = document.querySelectorAll(".card-container");
    //     pokemonCards.forEach(pokemonCard =>
    //         pokemonVisibilityObserver.observe(pokemonCard)
    // );
}