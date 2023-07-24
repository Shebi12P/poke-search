export const populateinfoCardImages = (defaultSpriteUrl, shinySpriteUrl, pokemonName) => {
    const defaultSprite = document.querySelector(".default-sprite");
    const shinySprite = document.querySelector(".shiny-sprite");
    const BASE_ALT_TEXT = "An image of";

    defaultSprite.src = `${defaultSpriteUrl}`;
    shinySprite.src =  `${shinySpriteUrl}`;
    defaultSprite.alt = `${BASE_ALT_TEXT} ${pokemonName}`;
    shinySprite.alt =  `${BASE_ALT_TEXT} shiny ${pokemonName}`;
}