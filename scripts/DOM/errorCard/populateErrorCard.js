export const populateErrorCard = (error) => {
    const { status, message, userTip} = error;
    // const errorStatusElement = document.querySelector(".error-status");
    const errorMessageElement = document.querySelector(".error-message");
    const userTipElement = document.querySelector(".user-tip");

    // errorStatusElement.textContent = `Error ${status}`;
    errorMessageElement.textContent = message;
    userTipElement.textContent = userTip;
}