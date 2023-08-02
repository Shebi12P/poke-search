// localStorage.clear()
import { displayHomePagePokemon } from "./DOM/homePagePokemon/displayHomePagePokemon.js";
import { displayHomePagePokemonByGeneration } from "./DOM/homePagePokemon/displayHomePagePokemonByGeneration.js";
import { displaySearchedPokemon } from "./DOM/searchPokemon/displaySearchedPokemon.js";
import { toggleErrorCard } from "./DOM/errorCard/toggleErrorCard.js";
import { toggleInfoCard } from "./DOM/infoCard/toggleInfoCard.js";
import { toggleDropdown } from "./DOM/dropdown/toggleDropdown.js";
import { loadNewPokemonObserver } from "./observers/loadNewPokemonObserver.js";
import { createDebounce } from "./utils/debounce.js";
import { togglePokemonHintList } from "./DOM/pokemonHintList/togglePokemonHintList.js";
import { findPokemonFromInput } from "./DOM/pokemonHintList/findPokemonFromInput.js";

await displayHomePagePokemon();

const lastPokemonCardContainer = document.querySelector(".card-list").lastChild;
const lastPokemonCard = lastPokemonCardContainer.firstChild;
loadNewPokemonObserver.observe(lastPokemonCard);

const body = document.documentElement;
body.addEventListener("click", toggleInfoCard);

const searchPokemonForm = document.querySelector(".search-pokemon-form");
searchPokemonForm.addEventListener("submit", displaySearchedPokemon);

const errorCloseButton = document.querySelector(".error-close-button");
errorCloseButton.addEventListener("click", toggleErrorCard);

const generationDropdownWrapper = document.querySelector(".dropdown-wrapper");
generationDropdownWrapper.addEventListener("click", toggleDropdown);
generationDropdownWrapper.addEventListener("click", displayHomePagePokemonByGeneration);

const searchPokemonInput = document.querySelector(".search-pokemon-input");
searchPokemonInput.addEventListener("input", () => {
        const delay = 500;
        createDebounce(togglePokemonHintList, delay);
    }
);

// const searchPokemonHintList = document.querySelector(".search-pokemon-hint-list");
// searchPokemonHintList.addEventListener("click", () => console.log());