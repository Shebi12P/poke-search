import { capitalizeText } from "../../utils/capitalizeText.js";

export const populateInfoCardHeading = (pokemonName) => {
    const infoCardHeading = document.querySelector(".info-card-heading");
    infoCardHeading.textContent = capitalizeText(pokemonName);
}