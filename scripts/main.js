import { fetchPokemon } from "./api/fetchPokemon.js";
import { cachePokemon } from "./cache/cachePokemon.js";
import { isPokemonCashed } from "./cache/isPokemonCached.js";
import { getPokemonDataFromCache } from "./cache/getPokemonDataFromCache.js";
import { createCard } from "./DOM/createCard.js";

let fetchedPokemon = {};
const pokemon = "poliwrath";

if(isPokemonCashed(pokemon)) {
    fetchedPokemon = getPokemonDataFromCache(pokemon);
}
else {
    fetchedPokemon = await fetchPokemon(pokemon);
    cachePokemon(fetchedPokemon);
}

const card = createCard(fetchedPokemon);
const cardGrid = document.querySelector(".card-grid");
cardGrid.appendChild(card)
