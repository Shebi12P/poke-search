import { populateInfoCard } from "./populateInfoCard.js";
import { wasPokemonSearchedPreviousTime } from "../searchPokemon/wasPokemonSearchedPreviousTime.js";
import { toggleOverlay } from "../overlay/toggleOverlay.js";
import { changeInfoCardVisibility } from "./changeInfoCardVisibility.js";

export const toggleInfoCard = (event, pokemonId) => {
    const clickedObject = event.target;
    const wasShowMoreInfoButtonClicked = clickedObject.classList.contains("show-more-info");
    const wasCloseButtonClicked = clickedObject.classList.contains("close-button")
        || clickedObject.hasAttribute("data-close-button-child");
    const wasSearchPokemonHintClicked = clickedObject.classList.contains("search-pokemon-hint");

    let hideCard = false;
    let showOverlay = true;
    
    if(wasShowMoreInfoButtonClicked) {
        toggleOverlay();
        pokemonId = clickedObject.closest(".card").getAttribute("data-pokemon-id");

        if(wasPokemonSearchedPreviousTime(pokemonId)) {
            changeInfoCardVisibility(hideCard, showOverlay);
            return;
        }
    
        populateInfoCard(pokemonId);
        changeInfoCardVisibility(hideCard, showOverlay);
        return;
    }

    if(wasCloseButtonClicked) {
        hideCard = true;
        showOverlay = false;
        changeInfoCardVisibility(hideCard, showOverlay);
        return;
    }

    if(event.type === "submit") {
        toggleOverlay();
        
        if(wasPokemonSearchedPreviousTime(pokemonId)) {
            changeInfoCardVisibility(hideCard, showOverlay);
            return;
        }
        
        populateInfoCard(pokemonId);
        changeInfoCardVisibility(hideCard, showOverlay);
        return;
    }

    if(wasSearchPokemonHintClicked) {
        toggleOverlay();
        
        if(wasPokemonSearchedPreviousTime(pokemonId)) {
            changeInfoCardVisibility(hideCard, showOverlay);
            return;
        }

        populateInfoCard(pokemonId);
        changeInfoCardVisibility(hideCard, showOverlay);
    }
}