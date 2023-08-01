export const togglePokemonHintList = () => {
    const searchPokemonHintList = document.querySelector(".search-pokemon-hint-list");
    searchPokemonHintList.setAttribute("aria-expanded", "true");
}