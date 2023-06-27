export const isPokemonCashed = (pokemon) => {
    const isPokemonCashed = localStorage.getItem(pokemon);

    return isPokemonCashed;
}