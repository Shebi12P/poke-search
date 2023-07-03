import { getPokemonDataFromCache } from "../../cache/getPokemonDataFromCache.js";
import { populateinfoCardImages } from "./populateInfoCardImgages.js";

export const populateInfoCard = (pokemonName) => {
    const pokemonData = getPokemonDataFromCache(pokemonName);

    populateinfoCardImages(pokemonData.sprites);
}