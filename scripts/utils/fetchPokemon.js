export const fetchPokemon = async (pokemonName) => {
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    let fetchUrl = `${BASE_URL}${pokemonName}`;
    
    if(pokemonName === undefined) {
        const POKEMON_LIMIT = 10;
        fetchUrl = `${BASE_URL}?limit=${POKEMON_LIMIT}`;
    }

    const response = await fetch(fetchUrl);
    const fetchedPokemon = await response.json();

    return fetchedPokemon;
}