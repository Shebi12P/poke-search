export const getPokemonDataFromCache = (key) => {
    let pokemonData = localStorage.getItem(key);
    pokemonData = JSON.parse(pokemonData);

    return pokemonData;
}