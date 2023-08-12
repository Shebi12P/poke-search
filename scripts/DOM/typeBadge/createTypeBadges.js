export const createTypeBadges = (pokemonTypes) => {
    let typeBadges = "";
    
    pokemonTypes.forEach(pokemonType => {
        const pokemonTypeName = pokemonType.type?.name ||  pokemonType;
        typeBadges += `<span class="type-badge" data-type=${pokemonTypeName}>
        ${pokemonTypeName}</span>`
    })
    
    return typeBadges;
}