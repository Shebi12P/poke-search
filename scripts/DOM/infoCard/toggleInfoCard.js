import { populateInfoCard } from "./populateInfoCard.js";

export const toggleInfoCard = (event, pokemonId) => {
    const milisecondDelay = 250;
    const pokemonInfoCard = document.querySelector(".info-card");
    
    if(event.type === "submit") {
        populateInfoCard(pokemonId);

        setTimeout(() => {
            pokemonInfoCard.setAttribute("aria-hidden", "false");
        }, milisecondDelay);
    }

    const clickedObject = event.target;
    const isShowMoreButtonClicked = clickedObject.classList.contains("show-more-info");
    const isCloseButtonClicked = clickedObject.classList.contains("close-button");
    const isCloseButtonChildrenClicked = clickedObject.getAttribute("data-close-button-child");
    
    if(isShowMoreButtonClicked) {
        pokemonId = clickedObject.closest(".card").getAttribute("data-pokemon-id");
        console.log(clickedObject.closest(".card"))
        populateInfoCard(pokemonId);

        setTimeout(() => {
            pokemonInfoCard.setAttribute("aria-hidden", "false");
            return;
        }, milisecondDelay);
    }
    
    if(isCloseButtonClicked || isCloseButtonChildrenClicked) {
        pokemonInfoCard.setAttribute("aria-hidden", "true");
    }
}