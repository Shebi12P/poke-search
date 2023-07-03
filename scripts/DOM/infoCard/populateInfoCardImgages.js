export const populateinfoCardImages = ([...sprites]) => {
    const [ defaultSpriteURL, shinySpriteURL ] = sprites; 
    const defaultSprite = document.querySelector(".default-sprite");
    const shinySprite = document.querySelector(".shiny-sprite");

    defaultSprite.setAttribute("src",  defaultSpriteURL);
    shinySprite.setAttribute("src",  shinySpriteURL);
}