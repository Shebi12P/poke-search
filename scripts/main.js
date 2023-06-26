import { fetchPokemon } from "./utils/fetchPokemon.js";
import { cachePokemon } from "./utils/cachePokemon.js";
import { isPokemonCashed } from "./utils/isPokemonCached.js";
import { getPokemonDataFromCache } from "./utils/getPokemonDataFromCache.js";
import { createCard } from "./DOM/createCard.js";

const fetchedPokemon = await fetchPokemon("charizard");

const card = createCard(fetchedPokemon);
const cardGrid = document.querySelector(".card-grid");

cardGrid.appendChild(card)
// const fetchedPokemon = await fetchPokemon("clefairy");
// createCardImage(fetchedPokemon);

// if(!isPokemonCashed("clefairy")) {
//     const fetchedPokemon = await fetchPokemon("clefairy");
//     cachePokemon(fetchedPokemon);
// }
// else {
//     console.log(getPokemonDataFromCache("clefairy"));
// }