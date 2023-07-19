import { fetchPokemon } from "./fetchPokemon.js";

export const fetchLastPokemonId = async () => {
    const ALL_POKEMON_URL = "?limit=100000&offset=0";
    const allFetchedPokemon = await fetchPokemon(ALL_POKEMON_URL);
    const lastPokemonId = allFetchedPokemon.count - 1;

    return lastPokemonId;
}