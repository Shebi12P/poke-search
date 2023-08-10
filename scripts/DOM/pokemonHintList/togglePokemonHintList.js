import { checkForSpecialCharacters } from "../../formValidation/checkSpecialCharacters.js";
import { findPokemonFromInput } from "./findPokemonFromInput.js";
import { populatePokemonHintList } from "./populatePokemonHintList.js";

export const togglePokemonHintList = (hidePokemonHintList) => {
    const searchPokemonHintList = document.querySelector(".search-pokemon-hint-list");
    const searchPokemonInputGroup = document.querySelector(".input-group");
    searchPokemonInputGroup.setAttribute("data-overflow", "true");
    searchPokemonHintList.setAttribute("aria-expanded", "false");
    searchPokemonHintList.innerHTML = "";

    if(hidePokemonHintList) {
        searchPokemonInputGroup.setAttribute("data-overflow", "false");
        return;
    }

    const searchedText = document.querySelector(".search-pokemon-input").value;
    const whiteListPattern = /-/;

    if(searchedText.length === 0 ||
        checkForSpecialCharacters(searchedText, whiteListPattern)) {
            searchPokemonInputGroup.setAttribute("data-overflow", "false");
            return;
    }

    const foundPokemon = findPokemonFromInput();

    if(foundPokemon.length === 0) {
        searchPokemonHintList.innerHTML = `<li class="search-pokemon-hint" data-not-found>Pokemon not found</li>`;
        searchPokemonHintList.setAttribute("aria-expanded", "true");
        return;
    }

    populatePokemonHintList(foundPokemon);
    searchPokemonHintList.setAttribute("aria-expanded", "true");
}