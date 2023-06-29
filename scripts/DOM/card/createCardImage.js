export const createCardImage = (imageUrl, pokemonName) => {
    const imageAlt = `An image of ${pokemonName}`;
    const image = document.createElement("img");

    image.setAttribute("src", imageUrl);
    image.setAttribute("alt", imageAlt);

    return image;
}