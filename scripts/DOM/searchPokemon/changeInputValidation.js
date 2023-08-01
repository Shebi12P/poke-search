export const changeInputValidation = (hasErrorOccured) => {
    const serachPokemonInput = document.querySelector(".search-pokemon-input");
    serachPokemonInput.setAttribute("aria-invalid", hasErrorOccured.toString());
}