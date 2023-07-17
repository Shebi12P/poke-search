import { populateInfoCard } from "./populateInfoCard.js";

export const toggleInfoCard = (event, pokemonId) => {
    const pokemonInfoCard = document.querySelector(".info-card");
    
    if(event.type === "submit") {
        populateInfoCard(pokemonId);

        pokemonInfoCard.setAttribute("aria-hidden", "false");
    }

    const clickedObject = event.target;
    const isShowMoreButtonClicked = clickedObject.classList.contains("show-more-info");
    const isCloseButtonClicked = clickedObject.classList.contains("close-button");
    const isCloseButtonChildrenClicked = clickedObject.getAttribute("data-close-button-child");
    
    if(isShowMoreButtonClicked) {
        pokemonId = clickedObject.closest(".card").getAttribute("data-pokemon-id");
        populateInfoCard(pokemonId);

        pokemonInfoCard.setAttribute("aria-hidden", "false");
        return;
    }
    
    if(isCloseButtonClicked || isCloseButtonChildrenClicked) {
        pokemonInfoCard.setAttribute("aria-hidden", "true");
    }
}