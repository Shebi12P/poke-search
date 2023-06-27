export const cachePokemon = (pokemonData) => {
    let pokemonId = pokemonData.id;
    const stringifedPokemonData = JSON.stringify(pokemonData);
    localStorage.setItem(pokemonId, stringifedPokemonData);
}