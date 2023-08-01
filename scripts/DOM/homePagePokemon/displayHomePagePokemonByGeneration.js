import { displayHomePagePokemon } from "./displayHomePagePokemon.js";
import { loadNewPokemonObserver } from "../../observers/loadNewPokemonObserver.js";

export const displayHomePagePokemonByGeneration = async (event) => {
    const clickedObject = event.target;
    const wasDropdownItemClicked = clickedObject.classList.contains("dropdown-item");

    if(!wasDropdownItemClicked) return;

    const pokemonCardList = document.querySelector(".card-list");
    const firstGeneratedPokemonId = parseInt(
        pokemonCardList.getAttribute("data-first-generated-pokemon-id")
    );

    const firstPokemonIdInGeneration = parseInt(
        clickedObject.getAttribute("data-first-pokemon-id-in-generation")
    );

    if(firstPokemonIdInGeneration == firstGeneratedPokemonId) return;

    pokemonCardList.innerHTML = "";
    pokemonCardList.setAttribute("data-first-generated-pokemon-id", firstPokemonIdInGeneration);

    const firstPokemonIdToGenerate = firstPokemonIdInGeneration - 1;
    await displayHomePagePokemon(firstPokemonIdToGenerate);

    const lastPokemonCard = pokemonCardList.lastChild;
    loadNewPokemonObserver.observe(lastPokemonCard);
}