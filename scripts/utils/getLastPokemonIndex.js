export const getLastPokemonId = () => {
    const cardGrid = document.querySelector(".card-grid");
    const lastCard = cardGrid.lastElementChild;
    const lastPokemonId = parseInt(lastCard.getAttribute("data-pokemon-id"));
    
    return lastPokemonId;
}