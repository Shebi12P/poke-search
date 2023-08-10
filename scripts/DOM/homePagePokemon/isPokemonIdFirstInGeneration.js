export const isPokemonIdFirstInGeneration = (pokemonId) => {
    const FIRST_POKEMON_ID_IN_EACH_GENERATION = [1, 152, 252, 387, 495, 650, 722, 810, 906];
    let isPokemonIdFirstInGeneration = false;

    if(FIRST_POKEMON_ID_IN_EACH_GENERATION.includes(pokemonId)) {
        isPokemonIdFirstInGeneration = true;
    }

    return isPokemonIdFirstInGeneration;
}