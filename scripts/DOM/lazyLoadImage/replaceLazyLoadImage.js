import { createPokemonCardImage } from "../pokemonCard/createPokemonCardImage.js";

export const replaceLazyLoadImage = (lazyLoadImages, lazyLoadObserver) => {
    lazyLoadImages.forEach(lazyLoadImage => {

        if(lazyLoadImage.isIntersecting) {
            const imageSource = lazyLoadImage.target.getAttribute("data-source");
            const imageAltText = lazyLoadImage.target.getAttribute("data-alt");
            
            lazyLoadImage.target.removeAttribute("data-alt");
            lazyLoadImage.target.removeAttribute("data-src");
            lazyLoadImage.target.removeAttribute("data-loading");
            
            lazyLoadImage.target.setAttribute("src", imageSource);
            lazyLoadImage.target.setAttribute("alt", imageAltText);

            lazyLoadObserver.unobserve(lazyLoadImage.target);
        }
    })
}