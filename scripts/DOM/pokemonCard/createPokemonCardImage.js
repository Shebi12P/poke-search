import { capitalizeText } from "../../utils/capitalizeText.js";

export const createPokemonCardImage = (pokemonName, pokemonId) => {
    const pokemonCardImageAlt = `An image of ${capitalizeText(pokemonName)}`;
    const pokemonFrontImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
    const pokemonCardImage = `<img src="${[pokemonFrontImageUrl]}" alt="${pokemonCardImageAlt}">`;

    return pokemonCardImage;
}