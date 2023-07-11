export const createCardImage = (imageUrl, pokemonName) => {
    const imageAlt = `An image of ${pokemonName}`;
    const image = `<img src="${imageUrl}" alt="${imageAlt}"></img>`;

    return image;
}