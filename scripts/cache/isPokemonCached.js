export const isPokemonCashed = (pokemonId) => {
    const isPokemonCashed = localStorage.getItem(pokemonId)
        ? true
        : false;

        console.log(isPokemonCashed)
    return isPokemonCashed;
}