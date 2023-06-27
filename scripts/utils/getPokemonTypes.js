export const getPokemonTypes = (pokemonData) => {
    const pokemonTypes = Object.values(pokemonData.types);
    const pokemonTypeNames = [];

    pokemonTypes.forEach((pokemonType) => {
        pokemonTypeNames.push(pokemonType.type.name);
    });

    return pokemonTypeNames;
}