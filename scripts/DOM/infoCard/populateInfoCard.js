import { getPokemonDataFromCache } from "../../cache/getPokemonDataFromCache.js";
import { populateinfoCardImages } from "./populateInfoCardImgages.js";
import { populateTypeBadges } from "./populateTypeBadges.js";
import { populateMeasurements } from "./populateMeasurements.js";
import { populateStats } from "./populateStats.js";

export const populateInfoCard = async (pokemonId) => {
    const pokemonData = getPokemonDataFromCache(pokemonId);
    console.log(pokemonId);

    const defaultSpriteUrl = pokemonData.sprites[0];
    const shinySpriteUrl = pokemonData.sprites[1];
    populateinfoCardImages(defaultSpriteUrl, shinySpriteUrl);

    const types = pokemonData.types;
    populateTypeBadges(types);

    const { weight, height } = pokemonData;
    populateMeasurements(height, weight);

    const stats = pokemonData.stats;
    populateStats(stats);
}