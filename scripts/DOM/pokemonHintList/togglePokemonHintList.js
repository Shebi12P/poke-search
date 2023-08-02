import { findPokemonFromInput } from "./findPokemonFromInput.js";
import { populatePokemonHintList } from "./populatePokemonHintList.js";

export const togglePokemonHintList = () => {
    const searchPokemonHintList = document.querySelector(".search-pokemon-hint-list");

    const foundPokemon = findPokemonFromInput();

    if(foundPokemon.length === 0) {
        return;
    }

    populatePokemonHintList(foundPokemon);
    searchPokemonHintList.setAttribute("aria-expanded", "true");
}