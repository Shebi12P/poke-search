// localStorage.clear()
import { displayHomePagePokemon } from "./DOM/displayHomePagePokemon.js";
import { getPokemonDataFromCache } from "./cache/getPokemonDataFromCache.js";
displayHomePagePokemon();

// Przed pobraniem kolejnych pokemonów wyczyść localstorage

console.log(getPokemonDataFromCache("1"));