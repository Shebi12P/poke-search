import { getPokemonDataFromCache } from "../../cache/getPokemonDataFromCache.js";
import { populateinfoCardImages } from "./populateInfoCardImgages.js";
import { populateTypeBadges } from "./populateTypeBadges.js";
import { populateMeasurements } from "./populateMeasurements.js";
import { populateStats } from "./populateStats.js";
import { populateInfoCardHeading } from "./populateInfoCardHeading.js";

export const populateInfoCard = async (pokemonData) => {
    const {
        name: pokemonName,
        id: pokemonId,
        weight: weight,
        height: height,
        types: types,
        stats: stats
    } = pokemonData;
    
    const infoCard = document.querySelector(".info-card");
    infoCard.setAttribute("data-pokemon-name", pokemonName);
    infoCard.setAttribute("data-pokemon-id", pokemonId);
    
    populateInfoCardHeading(pokemonName);
    
    populateinfoCardImages(pokemonName, pokemonId);

    populateTypeBadges(types);

    populateMeasurements(height, weight);

    populateStats(stats);
}