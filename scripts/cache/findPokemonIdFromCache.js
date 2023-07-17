export const findPokemonIdFromCache = (pokemonName) => {
    const allCachedPokemon = localStorage.getItem("allPokemon");
    const pattern = `${pokemonName}[0-9]+`;
    const regularExpresion= new RegExp(pattern, "i");
    
    if(!regularExpresion.exec(allCachedPokemon)) {
        const notCashedPokemonId = -1;
        return notCashedPokemonId;
    }

    const foundPokemon = regularExpresion.exec(allCachedPokemon)[0];
    const foundPokemonId = /[0-9]+/.exec(foundPokemon);
    
    return foundPokemonId;
}