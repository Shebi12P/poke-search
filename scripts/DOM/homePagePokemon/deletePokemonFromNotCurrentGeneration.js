export const deletePokemonFromNotCurrentGeneration = (currentLastPokemonInGenerationId) => {
        const cardList = document.querySelector(".card-list");
        const indexOfLastChildToDelete = currentLastPokemonInGenerationId ;
        const indexOfFirstChildToDelete = cardList.children.length - 1;

        for(let i = indexOfFirstChildToDelete; i >= indexOfLastChildToDelete; i--) {
            let currentChildToDelete = cardList.children[i];
            cardList.removeChild(currentChildToDelete);
        }
}