import { replaceLazyLoadImage } from "../DOM/lazyLoadImage/replaceLazyLoadImage.js";

export const lazyLoadObserver = new IntersectionObserver(replaceLazyLoadImage, { threshold: 1 });