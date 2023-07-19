export const getLastPokemonIdFromCache = () => {
    const lastPokemonIdFromCache = localStorage.getItem("lastPokemonId");
    return lastPokemonIdFromCache;
}