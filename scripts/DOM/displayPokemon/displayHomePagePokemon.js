import { createCard } from "../card/createCard.js";
import { cachePokemon } from "../../cache/cachePokemon.js";
import { fetchPokemon } from "../../api/fetchPokemon.js";
import { isPokemonCashed } from "../../cache/isPokemonCached.js";
import { getPokemonDataFromCache } from "../../cache/getPokemonDataFromCache.js";

const cardList = document.querySelector(".card-list");

export const displayHomePagePokemon = async (lastPokemonId = 0) => {
    let pokemonLimit = parseInt(lastPokemonId + 9);
    let pokemon = {};
    const pokemonCards = [];

    for(let i = lastPokemonId; i < pokemonLimit; i++) {
        let pokemonId = parseInt(i+1);
        let pokemonFromCache = false;

        if(isPokemonCashed(pokemonId)) {
            pokemon = getPokemonDataFromCache(pokemonId);
            pokemonFromCache = true;

            console.log("From cache");
        }
        else {
            pokemon = await fetchPokemon(pokemonId);
            cachePokemon(pokemon);

            console.log("From api");
        }

        const card = createCard(pokemon, pokemonFromCache);
        pokemonCards.push(card);
    }

    pokemonCards.forEach(pokemonCard => {
        const listItem = `<li class="card-container">${pokemonCard}</li>`;
        cardList.insertAdjacentHTML("beforeend", listItem);
    })
}
