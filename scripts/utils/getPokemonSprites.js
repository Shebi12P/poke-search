export const getPokemonSprites = (pokemonData) => {
    const sprites = [
        pokemonData.sprites.other["official-artwork"].front_default,
        pokemonData.sprites.other["official-artwork"].front_shiny
    ];
    
    return sprites;
}