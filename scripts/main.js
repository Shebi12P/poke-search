// localStorage.clear()
import { displayHomePagePokemon } from "./DOM/displayPokemon/displayHomePagePokemon.js";
import { loadNewPokemon } from "./DOM/displayPokemon/loadNewPokemon.js";
import { toggleInfoCard } from "./DOM/infoCard/toggleInfoCard.js";


await displayHomePagePokemon();

const seeMorePokemonObserver = new IntersectionObserver(loadNewPokemon, { rootMargin: "300px"});
const seeMorePokemonElement = document.querySelector(".see-more-pokemon");
seeMorePokemonObserver.observe(seeMorePokemonElement);

const body = document.documentElement;
body.addEventListener("click", toggleInfoCard);