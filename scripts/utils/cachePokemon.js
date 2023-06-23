export const cachePokemon = (pokemonData) => {
    const hasMoreThanOnePokemon = Object.keys(pokemonData).includes("results");
    let key = "homePagePokemon";
    
    if(!hasMoreThanOnePokemon) {
        key = pokemonData.name;
    }

    const stringifedPokemonData = JSON.stringify(pokemonData);
    localStorage.setItem(key, stringifedPokemonData);
}