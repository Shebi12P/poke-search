import { lazyLoadObserver } from "../../observers/lazyLoadObserver.js";

export const observeNewPokemon = () => {
    const lazyLoadImagesInPokemonCards = document.querySelectorAll(".card-list .lazy-load-image");

    lazyLoadImagesInPokemonCards.forEach(lazyLoadImageInPokemonCard =>
        lazyLoadObserver.observe(lazyLoadImageInPokemonCard));
}