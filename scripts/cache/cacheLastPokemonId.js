import { fetchLastPokemonId } from "../api/fetchLastPokemonId.js";

export const cacheLastPokemonId = async () => {
    const lastPokemonId = await fetchLastPokemonId(); 
    localStorage.setItem("lastPokemonId", lastPokemonId);
}