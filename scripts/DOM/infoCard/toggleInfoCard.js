import { populateInfoCard } from "./populateInfoCard.js";
import { wasPokemonSearchedPreviousTime } from "../searchPokemon/wasPokemonSearchedPreviousTime.js";

export const toggleInfoCard = (event, pokemonId) => {
    const milisecondDelay = 250;
    const pokemonInfoCard = document.querySelector(".info-card");

    // if(wasPokemonSearchedPreviousTime(pokemonId)) {
    //     console.log("Już odszukano")
    //     setTimeout(() => {
    //         pokemonInfoCard.setAttribute("aria-hidden", "false");
    //     }, milisecondDelay);

    //     return;
    // }
    
    if(event.type === "submit") {
        if(!wasPokemonSearchedPreviousTime(pokemonId)){
            populateInfoCard(pokemonId);
            console.log("Nie odszkkano submit")  
        } 
        
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
        if(!wasPokemonSearchedPreviousTime(pokemonId)) {
            populateInfoCard(pokemonId);
            console.log("Nie odszkkano click")
        }

        setTimeout(() => {
            pokemonInfoCard.setAttribute("aria-hidden", "false");
            return;
        }, milisecondDelay);
    }
    
    if(isCloseButtonClicked || isCloseButtonChildrenClicked) {
        pokemonInfoCard.setAttribute("aria-hidden", "true");
    }
}