export const populateErrorCard = (error) => {
    const { message, userTip} = error;
    const errorMessageElement = document.querySelector(".error-message");
    const userTipElement = document.querySelector(".user-tip");

    errorMessageElement.textContent = message;
    userTipElement.textContent = userTip;
}