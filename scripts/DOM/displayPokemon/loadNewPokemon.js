import { getLastPokemonId } from "../../utils/getLastPokemonIndex.js";
import { displayHomePagePokemon } from "./displayHomePagePokemon.js";

export const loadNewPokemon = async (seeMorePokemonElement) => {
    const isIntersecting = seeMorePokemonElement[0].isIntersecting;

    if(isIntersecting) { 
        setTimeout(async () => {
            const lastPokemonId = getLastPokemonId();
            await displayHomePagePokemon(lastPokemonId);
        }
        , 0);
    }
}