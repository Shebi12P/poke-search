import { getPokemonDataFromCache } from "../../cache/getPokemonDataFromCache.js";
import { populateinfoCardImages } from "./populateInfoCardImgages.js";
import { populateTypeBadges } from "./populateTypeBadges.js";
import { populateMeasurements } from "./populateMeasurements.js";
import { populateStats } from "./populateStats.js";
import { populateInfoCardHeading } from "./populateInfoCardHeading.js";

export const populateInfoCard = async (pokemonId) => {

    const pokemonData = getPokemonDataFromCache(pokemonId);
    
    const pokemonName = pokemonData.name;
    const infoCard = document.querySelector(".info-card");
    infoCard.setAttribute("data-pokemon-name", pokemonName);

    infoCard.setAttribute("data-pokemon-id", pokemonId);
    
    populateInfoCardHeading(pokemonName);
    
    const defaultSpriteUrl = pokemonData.sprites[0];
    const shinySpriteUrl = pokemonData.sprites[1];
    populateinfoCardImages(defaultSpriteUrl, shinySpriteUrl, pokemonName);

    const types = pokemonData.types;
    populateTypeBadges(types);

    const { weight, height } = pokemonData;
    populateMeasurements(height, weight);

    const stats = pokemonData.stats;
    populateStats(stats);
}