import { displayHomePagePokemon } from "./displayHomePagePokemon.js";
import { loadNewPokemonObserver } from "../../observers/loadNewPokemonObserver.js";
import { LAST_BASE_FORM_POKEMON_ID } from "../../variables/lastBaseFormPokemonId.js";

export const displayHomePagePokemonByGeneration = async (event) => {
    const clickedObject = event.target;
    const wasDropdownItemClicked = clickedObject.classList.contains("dropdown-item");

    if(!wasDropdownItemClicked) return;

    const pokemonCardList = document.querySelector(".card-list");
    const firstGeneratedPokemonId = parseInt(
        pokemonCardList.getAttribute("data-first-generated-pokemon-id")
    );
    const firstPokemonInGenerationId = parseInt(
        clickedObject.getAttribute("data-first-pokemon-id-in-generation")
    );
    const clickedObjectSibling = clickedObject.nextElementSibling;
    let lastPokemonInGenerationId = parseInt(clickedObjectSibling
        .getAttribute("data-first-pokemon-id-in-generation")) - 1;

    if(lastPokemonInGenerationId < 1) {
        lastPokemonInGenerationId = LAST_BASE_FORM_POKEMON_ID;
    }

    const cardList = document.querySelector(".card-list");
    cardList.setAttribute("data-last-pokemon-id", lastPokemonInGenerationId);

    if(firstPokemonInGenerationId === firstGeneratedPokemonId) return;

    pokemonCardList.innerHTML = "";
    pokemonCardList.setAttribute("data-first-generated-pokemon-id", firstPokemonInGenerationId);
    clickedObject.setAttribute("current-generation", "");
    
    const firstPokemonToGenerateId = firstPokemonInGenerationId;
    await displayHomePagePokemon(firstPokemonToGenerateId, lastPokemonInGenerationId);

    const lastPokemonCard = pokemonCardList.lastChild;
    loadNewPokemonObserver.observe(lastPokemonCard);
    
}