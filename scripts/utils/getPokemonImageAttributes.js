import { capitalizeText } from "./capitalizeText.js";

export const getPokemonImageAttributes = (pokemonName, pokemonId) => {
    const pokemonCardImageAlt = `An image of ${capitalizeText(pokemonName)}`;
    const pokemonFrontImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

    return [pokemonFrontImageUrl, pokemonCardImageAlt];
}