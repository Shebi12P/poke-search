import { lazyLoadObserver } from "../../observers/lazyLoadObserver.js";
import { getLastPokemonCardId } from "../../utils/getLastPokemonCardId.js";
import { displayHomePagePokemon } from "./displayHomePagePokemon.js";

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

        const pokemonCardList = document.querySelector(".card-list");
        const notLoadedImages = pokemonCardList.querySelectorAll(".lazy-load-image[data-loading]");
        notLoadedImages.forEach(notLoadedImage => lazyLoadObserver.observe(notLoadedImage));
    }
}