export const toggleNoMorePokemonElement = () => {
    const noMorePokemonElement = document.querySelector(".no-more-pokemon");
    let hideNoMorePokemonElement = noMorePokemonElement.getAttribute("aria-hidden");
    hideNoMorePokemonElement = !hideNoMorePokemonElement;
    noMorePokemonElement.setAttribute("aria-hidden", hideNoMorePokemonElement.toString());
}