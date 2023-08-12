import { capitalizeText } from "../../utils/capitalizeText.js";
import { createShinySpriteImage } from "./createShinySpriteImage.js";

export const populateinfoCardImages = (pokemonName, pokemonId) => {
    const BASE_ALT_TEXT = "An image of";
    const LAST_POKEMON_WITHOUT_SHINY_SPRITE_ID = 1009;

    const defaultSprite = document.querySelector(".default-sprite");
    const defaultSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
    
    const shinySpriteUrl =
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemonId}.png`
        || null;
    defaultSprite.src = `${defaultSpriteUrl}`;
    defaultSprite.alt = `${BASE_ALT_TEXT} ${capitalizeText(pokemonName)}`;
    
    if(pokemonId === LAST_POKEMON_WITHOUT_SHINY_SPRITE_ID) return;
    
    if(!document.querySelector(".shiny-sprite")) {
        createShinySpriteImage();
    }

    const shinySprite = document.querySelector(".shiny-sprite");
    shinySprite.src =  `${shinySpriteUrl}`;
    shinySprite.alt =  `${BASE_ALT_TEXT} shiny ${capitalizeText(pokemonName)}`;

    const shinySpriteTextField = document.querySelector(".shiny-sprite-text");
    shinySpriteTextField.textContent = "Shiny sprite";
}