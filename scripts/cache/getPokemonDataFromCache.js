export const getPokemonDataFromCache = (pokemonName) => {
    let pokemonData = localStorage.getItem(pokemonName);
    pokemonData = JSON.parse(pokemonData);

    return pokemonData;
}