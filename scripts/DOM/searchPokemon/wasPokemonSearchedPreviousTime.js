export const wasPokemonSearchedPreviousTime = (pokemon) => {
    let wasSearchedPreviousTime = false;
    const infoCard = document.querySelector(".info-card")
    const lastSearchedPokemonName = infoCard.getAttribute("data-pokemon-name");
    const lastSearchedPokemonId = infoCard.getAttribute("data-pokemon-id");

    wasSearchedPreviousTime = lastSearchedPokemonName === pokemon
        || lastSearchedPokemonId === pokemon;

        console.log(wasSearchedPreviousTime);
    return wasSearchedPreviousTime;
}