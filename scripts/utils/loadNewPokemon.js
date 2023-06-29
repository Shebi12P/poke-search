import { getLastPokemonId } from "./getLastPokemonIndex.js";
import { displayHomePagePokemon } from "../DOM/displayHomePagePokemon.js";

export const loadNewPokemon = async (seeMorePokemonElement) => {
    const isIntersecting = seeMorePokemonElement[0].isIntersecting;

    if(isIntersecting) {
        const lastPokemonId = getLastPokemonId();
        await displayHomePagePokemon(lastPokemonId);
    }
}