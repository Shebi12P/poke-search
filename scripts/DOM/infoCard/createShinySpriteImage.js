export const createShinySpriteImage = () => {
    const shinySpriteWrapper = document.querySelector(".shiny-sprite-wrapper");
    const image = '<img class="shiny-sprite">';
    shinySpriteWrapper.insertAdjacentHTML("afterbegin", image);
}