// localStorage.clear()
import { displayHomePagePokemon } from "./DOM/displayHomePagePokemon.js";
import { getLastPokemonId } from "./utils/getLastPokemonIndex.js";

await displayHomePagePokemon();

const loadNewPokemon = async (seeMorePokemonElement) => {
    const isIntersecting = seeMorePokemonElement[0].isIntersecting;
    console.log(seeMorePokemonElement[0])

    if(isIntersecting) {
        const lastPokemonId = getLastPokemonId();
        await displayHomePagePokemon(lastPokemonId);
    }
}

const lastPokemonObserver = new IntersectionObserver(loadNewPokemon, { rootMargin: "150px"});
const seeMorePokemonElement = document.querySelector(".see-more-pokemon");
lastPokemonObserver.observe(seeMorePokemonElement);
