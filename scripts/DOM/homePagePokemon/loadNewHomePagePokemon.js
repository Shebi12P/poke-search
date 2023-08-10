import { getLastPokemonCardId } from "../../utils/getLastPokemonCardId.js";
import { displayHomePagePokemon } from "./displayHomePagePokemon.js";
import { handlePokemonVisibility } from "../../utils/handlePokemonVisibility.js";

// const pokemonVisibilityObserver = new IntersectionObserver(handlePokemonVisibility);
export const loadNewPokemon = async (entries, loadNewPokemonObserver) => {
    let lastPokemonCard = entries[0];
    const isLastPokemonCardIntersecting = lastPokemonCard.isIntersecting;

    if(isLastPokemonCardIntersecting) {
        const lastPokemonCardId = getLastPokemonCardId();
        await displayHomePagePokemon(lastPokemonCardId);
        loadNewPokemonObserver.unobserve(lastPokemonCard.target);
        

        const cardList = document.querySelector(".card-list");
        const newLastCard = cardList.lastChild;
        loadNewPokemonObserver.observe(newLastCard);
    }
}