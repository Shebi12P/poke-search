import { createPokemonCard } from "../pokemonCard/createPokemonCard.js";
import { cachePokemon } from "../../cache/cachePokemon.js";
import { fetchPokemon } from "../../api/fetchPokemon.js";
import { isPokemonCashed } from "../../cache/isPokemonCached.js";
import { getPokemonDataFromCache } from "../../cache/getPokemonDataFromCache.js";
import { getPokemonAmountPerRender } from "./getPokemonAmountPerRender.js";
import { LAST_BASE_FORM_POKEMON_ID } from "../../variables/lastBaseFormPokemonId.js";

export const displayHomePagePokemon = async (lastPokemonCardId = 0) => {
    if(lastPokemonCardId === LAST_BASE_FORM_POKEMON_ID) {
        return;
    }
    
    const cardList = document.querySelector(".card-list");

    const pokemonPerRender = getPokemonAmountPerRender(lastPokemonCardId);
    let pokemonLimit = parseInt(lastPokemonCardId + pokemonPerRender);
    let pokemon = {};
    const pokemonCards = [];
    
    for(let i = lastPokemonCardId; i < pokemonLimit; i++) {
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

        const card = createPokemonCard(pokemon, pokemonFromCache);
        pokemonCards.push(card);
    }

    pokemonCards.forEach(pokemonCard => {
        const listItem = `<li class="card-container">${pokemonCard}</li>`;
        cardList.insertAdjacentHTML("beforeend", listItem);
    })
}