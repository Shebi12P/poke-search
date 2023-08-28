import { loadNewPokemon } from "../DOM/homePagePokemon/loadNewHomePagePokemon.js";

export const loadNewPokemonObserver = new IntersectionObserver(loadNewPokemon, {threshold: .8});