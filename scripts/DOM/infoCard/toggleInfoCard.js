import { populateInfoCard } from "./populateInfoCard.js";
import { wasPokemonSearchedPreviousTime } from "../searchPokemon/wasPokemonSearchedPreviousTime.js";
import { toggleOverlay } from "../overlay/toggleOverlay.js";

export const toggleInfoCard = (event, pokemonId) => {
    const milisecondDelay = 250;
    const pokemonInfoCard = document.querySelector(".info-card");

    if(event.type === "submit") {
        toggleOverlay();
        if(wasPokemonSearchedPreviousTime(pokemonId)) return;
        
        populateInfoCard(pokemonId);
        setTimeout(() => {
            pokemonInfoCard.setAttribute("aria-hidden", "false");
            toggleOverlay();
            return;
        }, milisecondDelay);
    }

    const clickedObject = event.target;
    const wasShowMoreInfoButtonClicked = clickedObject.classList.contains("show-more-info");
    const wasCloseButtonClicked = clickedObject.classList.contains("close-button")
        || clickedObject.classList.contains("close-button-child");
    
    if(wasShowMoreInfoButtonClicked) {
        toggleOverlay();
        pokemonId = clickedObject.closest(".card").getAttribute("data-pokemon-id");

        if(wasPokemonSearchedPreviousTime(pokemonId)) return;
    
        populateInfoCard(pokemonId);
        setTimeout(() => {
            pokemonInfoCard.setAttribute("aria-hidden", "false");
            toggleOverlay();
        }, milisecondDelay);
    }

    if(wasCloseButtonClicked) {
        setTimeout(() => {
            pokemonInfoCard.setAttribute("aria-hidden", "true");
        }, milisecondDelay);
    }
}