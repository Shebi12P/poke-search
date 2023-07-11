import { createTypeBadges } from "../typeBadge/createTypeBadges.js";

export const populateTypeBadges = (types) => {
    const typeBadgesWrapper = document.querySelector(".info-type-badges");
    typeBadgesWrapper.innerHTML = '';
    
    const typeBadges = createTypeBadges(types);
    typeBadgesWrapper.insertAdjacentHTML("beforeend", typeBadges);
}