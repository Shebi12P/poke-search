import { createCard } from "./card/createCard.js";
import { cachePokemon } from "../cache/cachePokemon.js";
import { fetchPokemon } from "../api/fetchPokemon.js";
import { isPokemonCashed } from "../cache/isPokemonCached.js";
import { getPokemonDataFromCache } from "../cache/getPokemonDataFromCache.js";

const cardGrid = document.querySelector(".card-grid");

export const displayHomePagePokemon = async (lastPokemonId = 0) => {
    let pokemonLimit = parseInt(lastPokemonId + 8);
    let pokemon = {};

    for(let i = lastPokemonId; i < pokemonLimit; i++) {
        let pokemonId = parseInt(i+1);
        let pokemonFromCache = false;

        if(isPokemonCashed(pokemonId)) {
            pokemon = getPokemonDataFromCache(pokemonId);
            pokemonFromCache = true;
        }
        else {
            pokemon = await fetchPokemon(pokemonId);
            cachePokemon(pokemon);
        }

        const card = createCard(pokemon, pokemonFromCache);
        cardGrid.appendChild(card);
    }
}
