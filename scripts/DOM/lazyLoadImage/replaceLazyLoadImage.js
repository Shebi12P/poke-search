import { createPokemonCardImage } from "../pokemonCard/createPokemonCardImage.js";

export const replaceLazyLoadImage = (lazyLoadImages, lazyLoadObserver) => {
    lazyLoadImages.forEach(lazyLoadImage => {

        if(lazyLoadImage.isIntersecting) {
            const imageSource = lazyLoadImage.target.getAttribute("data-source");
            const imageAltText = lazyLoadImage.target.getAttribute("data-alt");
            lazyLoadImage.target.removeAttribute("data-loading");
            
            const pokemonCardImage = createPokemonCardImage(imageSource, imageAltText);
            lazyLoadImage.target.insertAdjacentHTML("beforeend", pokemonCardImage);
            lazyLoadObserver.unobserve(lazyLoadImage.target);
        }
    })
}