import { createTypeBadge } from "../typeBadge/createTypeBadge.js";

export const populateTypeBadges = (types) => {
    const typeBadgesWrapper = document.querySelector(".info-type-badges");
    typeBadgesWrapper.innerHTML = '';
    
    types.forEach(type => {
        const typeBadge = createTypeBadge(type);
        typeBadgesWrapper.appendChild(typeBadge);
    });
}