import { toggleOverlay } from "../overlay/toggleOverlay.js";

export const changeInfoCardVisibility = (hide, showOverlay) => {
    const milisecondDelay = 250;
    const pokemonInfoCard = document.querySelector(".info-card");
    
    setTimeout(() => {
        pokemonInfoCard.setAttribute("aria-hidden", hide.toString());
        if(showOverlay) {
            toggleOverlay();
        }
    }, milisecondDelay);
}