export const cachePokemon = (pokemonData) => {
    const { name, id, stats, types, weight, height, sprites } = pokemonData;

    const dataToCache = {
        id: id,
        name: name,
        types: types,
        stats: stats,
        weight: weight,
        height: height,
        sprites: sprites
    }

    const stringifedPokemonData = JSON.stringify(dataToCache);
    localStorage.setItem(id, stringifedPokemonData);
}