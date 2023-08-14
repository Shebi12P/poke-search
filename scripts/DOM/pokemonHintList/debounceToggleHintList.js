import { debounce } from "../../utils/debounce.js";
import { togglePokemonHintList } from "./togglePokemonHintList.js";

export const debounceToggleHintList = debounce(togglePokemonHintList, 750);