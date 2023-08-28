export const getLastPokemonCardId = () => {
    const cardList = document.querySelector(".card-list");
    const lastCard = cardList.lastElementChild.children[0];
    const lastPokemonId = parseInt(lastCard.getAttribute("data-pokemon-id"));
    
    return lastPokemonId;
}