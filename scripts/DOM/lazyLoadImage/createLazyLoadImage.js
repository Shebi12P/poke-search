export const createLazyLoadImage = ([imageUrl, imageAltText]) => {
    const lazyLoadImage = `<img
        class="lazy-load-image"
        data-source="${imageUrl}"
        data-alt="${imageAltText}"
        data-loading
    >`;

    return lazyLoadImage;
}