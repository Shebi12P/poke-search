export const createTypeBadges = (pokemonTypes) => {
    let typeBadges = "";
    pokemonTypes.forEach(pokemonType =>{
       typeBadges += `<span class="type-badge" data-type=${pokemonType}>
        ${pokemonType}</span>`
    })
    
    return typeBadges;
}