import { getPokemonImageAttributes } from "../../utils/getPokemonImageAttributes.js";
import { createLazyLoadImage } from "../lazyLoadImage/createLazyLoadImage.js";

export const createPokemonCardHeader = (pokemonName, pokemonId) => {
    const pokemonImageAttributes = getPokemonImageAttributes(pokemonName, pokemonId); 
    const lazyLoadImage = createLazyLoadImage(pokemonImageAttributes);
    const cardHeader = `<div class ="card-header">${lazyLoadImage}</div>`;

    return cardHeader;
}