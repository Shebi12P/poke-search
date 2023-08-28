export const getPokemonTypes = (pokemonData) => {
    const pokemonTypeNames = [];

    const pokemonTypes = Object.values(pokemonData.types);
    pokemonTypes.forEach((pokemonType) => {
        pokemonTypeNames.push(pokemonType.type.name);
    });

    return pokemonTypeNames;
}