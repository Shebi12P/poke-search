// localStorage.clear()
import { displayHomePagePokemon } from "./DOM/displayHomePagePokemon.js";
import { loadNewPokemon } from "./utils/loadNewPokemon.js";

await displayHomePagePokemon();

const lastPokemonObserver = new IntersectionObserver(loadNewPokemon, { rootMargin: "150px"});
const seeMorePokemonElement = document.querySelector(".see-more-pokemon");
lastPokemonObserver.observe(seeMorePokemonElement);