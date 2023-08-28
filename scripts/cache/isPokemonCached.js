export const isPokemonCashed = (pokemonId) => {
    const isPokemonCashed = localStorage.getItem(pokemonId)
        ? true
        : false;

    return isPokemonCashed;
}