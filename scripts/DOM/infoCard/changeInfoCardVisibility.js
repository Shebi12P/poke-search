import { toggleOverlay } from "../overlay/toggleOverlay.js";

export const changeInfoCardVisibility = (hide, showOverlay) => {
    const MILLISECOND_DELAY = 250;
    const pokemonInfoCard = document.querySelector(".info-card");
    
    setTimeout(() => {
        pokemonInfoCard.setAttribute("aria-hidden", hide.toString());
        
        if(showOverlay) {
            toggleOverlay();
        }
        
    }, MILLISECOND_DELAY);
}