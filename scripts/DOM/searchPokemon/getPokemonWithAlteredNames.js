export const getPokemonWithAlteredNames = (pokemonName) => {
    const pokemonsWithAlteredNames = {
        giratina: "giratina-altered",
        shaymin: ["shaymin-land", "shaymin-sky"]
    }

    console.log(Object.keys(pokemonsWithAlteredNames).includes(pokemonName))
    console.log(pokemonsWithAlteredNames[pokemonName]);
}