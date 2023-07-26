// localStorage.clear()
import { displayHomePagePokemon } from "./DOM/homePagePokemon/displayHomePagePokemon.js";
import { displaySearchedPokemon } from "./DOM/searchPokemon/displaySearchedPokemon.js";
import { loadNewPokemon } from "./DOM/homePagePokemon/loadNewHomePagePokemon.js";
import { toggleErrorCard } from "./DOM/errorCard/toggleErrorCard.js";
import { toggleInfoCard } from "./DOM/infoCard/toggleInfoCard.js";
import { toggleDropdown } from "./DOM/dropdown/toggleDropdown.js";

await displayHomePagePokemon();

const seeMorePokemonObserver = new IntersectionObserver(loadNewPokemon, { rootMargin: "50px"});
const seeMorePokemonElement = document.querySelector(".see-more-pokemon");
seeMorePokemonObserver.observe(seeMorePokemonElement);

const body = document.documentElement;
body.addEventListener("click", toggleInfoCard);

const searchPokemonForm = document.querySelector(".search-pokemon-form");
searchPokemonForm.addEventListener("submit", displaySearchedPokemon);

const errorCloseButton = document.querySelector(".error-close-button");
errorCloseButton.addEventListener("click", toggleErrorCard);

const generationDropdownWrapper = document.querySelector(".dropdown-wrapper");
generationDropdownWrapper.addEventListener("click", toggleDropdown);