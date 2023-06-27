export const isPokemonCashed = (pokemonId) => {
    const isPokemonCashed = localStorage.getItem(pokemonId);

    return isPokemonCashed;
}