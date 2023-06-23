import { fetchPokemon } from "./utils/fetchPokemon.js";
import { cachePokemon } from "./utils/cachePokemon.js";
import { isPokemonCashed } from "./utils/isPokemonCached.js";
import { getPokemonDataFromCache } from "./utils/getPokemonDataFromCache.js";

// if(!isPokemonCashed("clefairy")) {
//     const fetchedPokemon = await fetchPokemon("clefairy");
//     cachePokemon(fetchedPokemon);
// }
// else {
//     console.log(getPokemonDataFromCache("clefairy"));
// }