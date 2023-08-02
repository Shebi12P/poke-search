export const populatePokemonHintList = (pokemonNames) => {
    const pokemonHintList = document.querySelector(".search-pokemon-hint-list");
    pokemonHintList.innerHTML = "";
    
    pokemonNames.forEach(pokemonName => {
        const pokemonHintElement = `<li class="search-pokemon-hint">${pokemonName}</li>`;
        pokemonHintList.insertAdjacentHTML("afterbegin", pokemonHintElement);
    })
}