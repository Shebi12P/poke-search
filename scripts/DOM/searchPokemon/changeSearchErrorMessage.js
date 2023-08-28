export const changeSearchErrorMessage = (errorMessage) => {
    let makeVisible = false;
    const errorMessageField = document.querySelector(".search-pokemon-message");

    if(errorMessageField.textContent === errorMessage) return;
    
    errorMessageField.textContent = errorMessage;

    if(errorMessage === "") makeVisible = !makeVisible;
    
    errorMessageField.setAttribute("aria-hidden", makeVisible);
}