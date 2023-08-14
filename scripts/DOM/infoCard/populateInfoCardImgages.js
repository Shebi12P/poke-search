import { checkForNumberInRange } from "../../formValidation/checkForNumberInRange.js";
import { capitalizeText } from "../../utils/capitalizeText.js";
import { LAST_BASE_FORM_POKEMON_ID } from "../../variables/lastBaseFormPokemonId.js";
import { createShinySpriteImage } from "./createShinySpriteImage.js";

export const populateinfoCardImages = (pokemonName, pokemonId) => {
    const BASE_ALT_TEXT = "An image of";
    const FIRST_POKEMON_WITHOUT_SHINY_FORM_ID = 1009;
    pokemonId = parseInt(pokemonId);
    
    const defaultSprite = document.querySelector(".default-sprite");
    const defaultSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
    defaultSprite.src = `${defaultSpriteUrl}`;
    defaultSprite.alt = `${BASE_ALT_TEXT} ${capitalizeText(pokemonName)}`;
    
    const isIdInRange = checkForNumberInRange(pokemonId, FIRST_POKEMON_WITHOUT_SHINY_FORM_ID, LAST_BASE_FORM_POKEMON_ID);
    const shinySpriteTextField = document.querySelector(".shiny-sprite-text");
    
    if(isIdInRange && document.querySelector(".shiny-sprite")) {
        document.querySelector(".shiny-sprite").remove();
        shinySpriteTextField.textContent = "Shiny sprite not avaiable";
    }

    if(isIdInRange) return;
    
    const shinySpriteUrl = 
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemonId}.png`;
        
    if(!document.querySelector(".shiny-sprite")) {
        createShinySpriteImage();
    }

    const shinySprite = document.querySelector(".shiny-sprite");
    shinySprite.src =  `${shinySpriteUrl}`;
    shinySprite.alt =  `${BASE_ALT_TEXT} shiny ${capitalizeText(pokemonName)}`;
    shinySpriteTextField.textContent = "Shiny sprite";
}