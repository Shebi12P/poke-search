export const createTypeBadge = (pokemonType) => {
    const typeBadge = document.createElement("span");
    typeBadge.setAttribute("class", "type-badge");
    typeBadge.setAttribute("data-type", pokemonType);
    typeBadge.textContent = pokemonType;

    return typeBadge;
}