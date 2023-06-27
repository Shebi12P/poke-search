export const getPokemonDataFromCache = (pokemonId) => {
    let pokemonData = localStorage.getItem(pokemonId);
    pokemonData = JSON.parse(pokemonData);

    return pokemonData;
}