// localStorage.clear()
import { displayHomePagePokemon } from "./DOM/displayPokemon/displayHomePagePokemon.js";
import { loadNewPokemon } from "./DOM/displayPokemon/loadNewPokemon.js";
import { toggleInfoCard } from "./DOM/infoCard/toggleInfoCard.js";

await displayHomePagePokemon();

const seeMorePokemonObserver = new IntersectionObserver(loadNewPokemon, { rootMargin: "100px"});
const seeMorePokemonElement = document.querySelector(".see-more-pokemon");
seeMorePokemonObserver.observe(seeMorePokemonElement);

const body = document.documentElement;
body.addEventListener("click", toggleInfoCard);

const cardHeight = document.querySelector(`[data-pokemon-id="1"]`).getClientRects()[0].height.toFixed();
// const container = document.querySelector(".container").scroll



// setInterval(() => {
//     const fullWidth = document.documentElement.scrollHeight;
//     const scrollFromTop = window.scrollY;
//     const visibleWindowSize = window.innerHeight;
//     console.log(visible)

// }, 1000)