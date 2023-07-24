import { createTypeBadges } from "../typeBadge/createTypeBadges.js";
import { capitalizeText } from "../../utils/capitalizeText.js";

export const createPokemonCardBody = (pokemonName, pokemonTypes) => {
    pokemonName = capitalizeText(pokemonName);
    const header = `<h2>${pokemonName}</h2>`;
    
    const button = `<button class="button show-more-info">See more...</button>`;   
    
    const typebadges = createTypeBadges(pokemonTypes);
    const typeBadgesContainer = `<div class="type-badges">${typebadges}</div>`;
    
    const cardBody = `<div class="card-body">
        ${header}
        ${typeBadgesContainer}
        ${button}
    </div>`;
    
    return cardBody;
}