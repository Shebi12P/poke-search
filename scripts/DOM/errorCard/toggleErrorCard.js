export const toggleErrorCard = () => {
    const errorCard = document.querySelector(".error-card");
    const isHidden = errorCard.getAttribute("aria-hidden");
    
    if(isHidden === "true") {
        errorCard.setAttribute("aria-hidden", "false");
        return;
    }

    errorCard.setAttribute("aria-hidden", "true");
}