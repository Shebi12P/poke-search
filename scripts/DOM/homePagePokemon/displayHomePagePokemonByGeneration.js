import { displayHomePagePokemon } from "./displayHomePagePokemon.js";
import { loadNewPokemonObserver } from "../../observers/loadNewPokemonObserver.js";
import { LAST_BASE_FORM_POKEMON_ID } from "../../variables/lastBaseFormPokemonId.js";
import { deletePokemonFromNotCurrentGeneration } from "./deletePokemonFromNotCurrentGeneration.js";

export const displayHomePagePokemonByGeneration = async (event) => {
    const clickedObject = event.target;
    const clickedObjectSibling = clickedObject.nextElementSibling;
    const wasDropdownItemClicked = clickedObject.classList.contains("dropdown-item");
    if(!wasDropdownItemClicked) return;

    const pokemonCardList = document.querySelector(".card-list");
    const firstGeneratedPokemonId = parseInt(
        pokemonCardList.getAttribute("data-first-generated-pokemon-id")
    );
    const firstPokemonInGenerationId = parseInt(
        clickedObject.getAttribute("data-first-pokemon-id-in-generation")
    );
    let currentLastPokemonInGenerationId = parseInt(clickedObjectSibling
        .getAttribute("data-first-pokemon-id-in-generation")) - 1;

    if(currentLastPokemonInGenerationId < 1) {
        currentLastPokemonInGenerationId = LAST_BASE_FORM_POKEMON_ID;
    }

    const cardList = document.querySelector(".card-list");
    const previousLastPokemonInGenerationId = cardList.getAttribute("data-last-pokemon-id");
    cardList.setAttribute("data-last-pokemon-id", currentLastPokemonInGenerationId);

    if(previousLastPokemonInGenerationId > currentLastPokemonInGenerationId) {
        deletePokemonFromNotCurrentGeneration(currentLastPokemonInGenerationId)
    }

    if(firstPokemonInGenerationId === firstGeneratedPokemonId) return;

    pokemonCardList.innerHTML = "";
    pokemonCardList.setAttribute("data-first-generated-pokemon-id", firstPokemonInGenerationId);
    
    const firstPokemonToGenerateId = firstPokemonInGenerationId;
    await displayHomePagePokemon(firstPokemonToGenerateId, currentLastPokemonInGenerationId);

    const lastPokemonCard = pokemonCardList.lastChild;
    loadNewPokemonObserver.observe(lastPokemonCard);
}