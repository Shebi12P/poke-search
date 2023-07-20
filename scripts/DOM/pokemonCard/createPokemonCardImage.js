export const createPokemonCardImage = (imageUrl, pokemonName) => {
    const pokemonCardImageAlt = `An image of ${pokemonName}`;
    const pokemonCardImage = `<img src="${imageUrl}" alt="${pokemonCardImageAlt}">`;

    return pokemonCardImage;
}