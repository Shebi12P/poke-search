import { createPokemonCard } from "../pokemonCard/createPokemonCard.js";
import { cachePokemon } from "../../cache/cachePokemon.js";
import { fetchPokemon } from "../../api/fetchPokemon.js";
import { isPokemonCashed } from "../../cache/isPokemonCached.js";
import { getPokemonDataFromCache } from "../../cache/getPokemonDataFromCache.js";
import { getPokemonAmountPerRender } from "./getPokemonAmountPerRender.js";
import { fetchErrorsOccured } from "../../utils/fetchErrorsOccured.js";
import { createPokemonErrorCard } from "../pokemonErrorCard/createPokemonErrorCard.js";
import { toggleOverlay } from "../overlay/toggleOverlay.js";
import { isPokemonIdFirstInGeneration } from "./isPokemonIdFirstInGeneration.js";


export const displayHomePagePokemon = async (firstPokemonToGenerateId = 1) => {
    const cardList = document.querySelector(".card-list");
    let lastPokemonInGenerationId = cardList.getAttribute("data-last-pokemon-id");
    lastPokemonInGenerationId = parseInt(lastPokemonInGenerationId);

    if(firstPokemonToGenerateId === lastPokemonInGenerationId) {
        const noMorePokemonElement = document.querySelector(".no-more-pokemon");
        noMorePokemonElement.setAttribute("aria-hidden", "false");
        return;
    }

    toggleOverlay();


    if(!isPokemonIdFirstInGeneration(firstPokemonToGenerateId)) {
        firstPokemonToGenerateId += 1;
    }

    const pokemonPerRender = getPokemonAmountPerRender(firstPokemonToGenerateId, lastPokemonInGenerationId);
    const pokemonCards = [];
    
    for(let i = firstPokemonToGenerateId; i <= pokemonPerRender; i++) {
        let card = "";
        let pokemon = {};
        let pokemonId = i;
        let pokemonFromCache = false;

        if(isPokemonCashed(pokemonId)) {
            pokemon = getPokemonDataFromCache(pokemonId);
            pokemonFromCache = true;
            card = createPokemonCard(pokemon, pokemonFromCache);
            pokemonCards.push(card);

            continue;
        }
        
        pokemon = await fetchPokemon(pokemonId);
        
        if(!fetchErrorsOccured(pokemon)) {
            cachePokemon(pokemon);
            card = createPokemonCard(pokemon, pokemonFromCache);
            pokemonCards.push(card);
            
            continue;
        }

        const error = pokemon;
        card = createPokemonErrorCard(error);
        pokemonCards.push(card);        
    }

    pokemonCards.forEach(pokemonCard => {
        const listItem = `<li class="card-container">${pokemonCard}</li>`;
        cardList.insertAdjacentHTML("beforeend", listItem);
    })
    
    toggleOverlay();
}