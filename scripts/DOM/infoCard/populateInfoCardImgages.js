import { createShinySpriteImage } from "./createShinySpriteImage.js";

export const populateinfoCardImages = (defaultSpriteUrl, shinySpriteUrl, pokemonName) => {
    const defaultSprite = document.querySelector(".default-sprite");
    const BASE_ALT_TEXT = "An image of";
    
    defaultSprite.src = `${defaultSpriteUrl}`;
    defaultSprite.alt = `${BASE_ALT_TEXT} ${pokemonName}`;
    
    if(!shinySpriteUrl) return;
    
    if(!document.querySelector(".shiny-sprite")) {
        createShinySpriteImage();
    }

    const shinySprite = document.querySelector(".shiny-sprite");
    shinySprite.src =  `${shinySpriteUrl}`;
    shinySprite.alt =  `${BASE_ALT_TEXT} shiny ${pokemonName}`;

    const shinySpriteTextField = document.querySelector(".shiny-sprite-text");
    shinySpriteTextField.textContent = "Shiny sprite";
}