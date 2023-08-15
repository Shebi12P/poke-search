// localStorage.clear()
import { displayHomePagePokemon } from "./DOM/homePagePokemon/displayHomePagePokemon.js";
import { displayHomePagePokemonByGeneration } from "./DOM/homePagePokemon/displayHomePagePokemonByGeneration.js";
import { displaySearchedPokemon } from "./DOM/searchPokemon/displaySearchedPokemon.js";
import { toggleErrorCard } from "./DOM/errorCard/toggleErrorCard.js";
import { toggleInfoCard } from "./DOM/infoCard/toggleInfoCard.js";
import { toggleDropdown } from "./DOM/dropdown/toggleDropdown.js";
import { loadNewPokemonObserver } from "./observers/loadNewPokemonObserver.js";
import { searchPokemonFromHintList } from "./DOM/pokemonHintList/searchPokemonFromHintList.js";
import { debounceToggleHintList } from "./DOM/pokemonHintList/debounceToggleHintList.js";

await displayHomePagePokemon();

const cardList = document.querySelector(".card-list");
const lastPokemonCardContainer = cardList.lastChild;
const lastPokemonCard = lastPokemonCardContainer.firstChild;
loadNewPokemonObserver.observe(lastPokemonCard);

const infoCard = document.querySelector(".info-card");
infoCard.addEventListener("click", toggleInfoCard);
cardList.addEventListener("click", toggleInfoCard);

const searchPokemonForm = document.querySelector(".search-pokemon-form");
searchPokemonForm.addEventListener("submit", displaySearchedPokemon);

const errorCloseButton = document.querySelector(".error-close-button");
errorCloseButton.addEventListener("click", toggleErrorCard);

const generationDropdownWrapper = document.querySelector(".dropdown-wrapper");
generationDropdownWrapper.addEventListener("click", toggleDropdown);
generationDropdownWrapper.addEventListener("click", displayHomePagePokemonByGeneration);

const searchPokemonInput = document.querySelector(".search-pokemon-input");
searchPokemonInput.addEventListener("input", () => {
        debounceToggleHintList();
    }
);

const searchPokemonHintList = document.querySelector(".search-pokemon-hint-list");
searchPokemonHintList.addEventListener("click", searchPokemonFromHintList);