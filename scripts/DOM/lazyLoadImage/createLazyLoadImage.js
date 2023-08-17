export const createLazyLoadImage = ([imageUrl, imageAltText]) => {
    const lazyLoadImage = `<div
        class="lazy-load-image"
        data-source="${imageUrl}"
        data-alt="${imageAltText}"
        data-loading
    ></div>`;

    return lazyLoadImage;
}