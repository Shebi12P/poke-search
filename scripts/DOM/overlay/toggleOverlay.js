export const toggleOverlay = () => {
    const overlay = document.querySelector(".overlay");
    const isVisible = overlay.getAttribute("aria-hidden");
    let makeVisible = "true";

    if(isVisible === "true") makeVisible = "false";

    overlay.setAttribute("aria-hidden", makeVisible);
}