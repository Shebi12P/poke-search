export const createPokemonCardImage = (pokemonFrontImageUrl, pokemonCardImageAlt) => {
    const pokemonCardImage = 
    `<div>
        <img 
            src="${pokemonFrontImageUrl}"
            alt="${pokemonCardImageAlt}"
        >
    </div>`;

    return pokemonCardImage;
}