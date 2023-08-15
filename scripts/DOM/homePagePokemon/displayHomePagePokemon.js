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
import { toggleNoMorePokemonElement } from "../noMorePokemon/toggleNoMorePokemonElement.js";
import { LAST_BASE_FORM_POKEMON_ID } from "../../variables/lastBaseFormPokemonId.js";


export const displayHomePagePokemon = async (firstPokemonToGenerateId = 1) => {
    const cardList = document.querySelector(".card-list");
    let lastPokemonInGenerationId = cardList.getAttribute("data-last-pokemon-id");
    lastPokemonInGenerationId = parseInt(lastPokemonInGenerationId);

    if(firstPokemonToGenerateId >= lastPokemonInGenerationId) {
        toggleNoMorePokemonElement();
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
        let pokemonId = i;
        
        if(pokemonId > LAST_BASE_FORM_POKEMON_ID)  {
            toggleOverlay();
            return;
        }
        
        let pokemon = getPokemonDataFromCache(pokemonId)
            || await fetchPokemon(pokemonId);

        if(fetchErrorsOccured(pokemon)) {
            const error = pokemon;
            card = createPokemonErrorCard(error);
            pokemonCards.push(card); 
            
            continue;
        }

        if(!isPokemonCashed(pokemonId)) {
            cachePokemon(pokemon);
        }

        card = createPokemonCard(pokemon);
        pokemonCards.push(card);
    }

    pokemonCards.forEach(pokemonCard => {
        const listItem = `<li class="card-container">${pokemonCard}</li>`;
        cardList.insertAdjacentHTML("beforeend", listItem);
    })
    
    toggleOverlay();
}