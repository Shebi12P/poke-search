export const createCardBody = (pokemonName) => {
    const h2 = document.createElement("h2");
    pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    h2.textContent = pokemonName;

    const button = document.createElement("button");
    button.textContent = "See more...";

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    cardBody.appendChild(h2);
    cardBody.appendChild(button);

    return cardBody;
}