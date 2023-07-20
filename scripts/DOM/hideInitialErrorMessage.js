export const hideInitialErrorMessage = () => {
    const initialErrorMessage = document.querySelector(".initial-error-message");
    initialErrorMessage.setAttribute("aria-hidden", "true");
}