export const populateinfoCardImages = (defaultSpriteUrl, shinySpriteUrl) => {
    const defaultSprite = document.querySelector(".default-sprite");
    const shinySprite = document.querySelector(".shiny-sprite");

    defaultSprite.src = `${defaultSpriteUrl}`;
    shinySprite.src =  `${shinySpriteUrl}`;
}