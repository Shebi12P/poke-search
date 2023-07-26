import { displayHomePagePokemon } from "./displayHomePagePokemon.js";

export const displayHomePagePokemonByGeneration = async (event) => {
    const clickedObject = event.target;

    if(!clickedObject.classList.contains("dropdown-item")) return;

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
}