export const cachePokemon = (pokemonData) => {
    const hasMoreThanOnePokemon = Object.keys(pokemonData).includes("results");
    let key = pokemonData.name;
    
    if(hasMoreThanOnePokemon) {
        let key = "homePagePokemon";
    }

    const stringifedPokemonData = JSON.stringify(pokemonData);
    localStorage.setItem(key, stringifedPokemonData);
}