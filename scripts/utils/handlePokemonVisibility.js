export const handlePokemonVisibility = (pokemonCards) => {
    pokemonCards.forEach(pokemonCard => {
        if(!pokemonCard.isIntersecting) {
            pokemonCard.target.setAttribute("aria-hidden", "true");
        }
        if(pokemonCard.isIntersecting) {
            pokemonCard.target.setAttribute("aria-hidden", "false");
        }
    });
}