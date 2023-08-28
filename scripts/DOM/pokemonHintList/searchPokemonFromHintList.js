import { displaySearchedPokemon } from "../searchPokemon/displaySearchedPokemon.js";
import { togglePokemonHintList } from "./togglePokemonHintList.js";

export const searchPokemonFromHintList = (event) => {
    const clickedObject = event.target;
    
    if(clickedObject.getAttribute("data-not-found")) {
        return;
    }
    
    const hidePokemonHintList = true;
    togglePokemonHintList(hidePokemonHintList);

    const clickedPokemonName = clickedObject.innerText;
    const searchPokemonInput = document.querySelector(".search-pokemon-input");
    searchPokemonInput.value = clickedPokemonName;
    displaySearchedPokemon(event);
    searchPokemonInput.value = "";
}