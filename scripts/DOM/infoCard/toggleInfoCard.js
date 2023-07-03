import { populateInfoCard } from "./populateInfoCard.js";

export const toggleInfoCard = (event) => {
    // populateInfoCard
    const pokemonInfoCard = document.querySelector(".info-card");
    const overlay = document.querySelector(".overlay");
    
    const clickedObject = event.target;
    const isButtonClicked = clickedObject.classList.contains("show-more-info");
    const isOverlayClicked = clickedObject.classList.contains("overlay");
    const isCloseButtonClicked = clickedObject.classList.contains("close-button");
    const isCloseButtonChildrenClicked = clickedObject.getAttribute("data-close-button-child");
    
    if(isButtonClicked) {
        pokemonInfoCard.setAttribute("aria-hidden", "false");
        overlay.setAttribute("aria-hidden", "false");
        const pokemonName = clickedObject.closest(".card").getAttribute("data-pokemon-name");
        populateInfoCard(pokemonName);
    }
    
    if(isOverlayClicked || isCloseButtonClicked || isCloseButtonChildrenClicked) {
        pokemonInfoCard.setAttribute("aria-hidden", "true");
        overlay.setAttribute("aria-hidden", "true");
    }
}