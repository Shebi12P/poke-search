export const changeSearchStyle = (hasErrorOccured) => {
    const searchPokemonInputGroup = document.querySelector(".input-group");
    const wasInputPreviouslyInvalid = searchPokemonInputGroup.getAttribute("data-error")

    if(wasInputPreviouslyInvalid === hasErrorOccured.toString()) {
        return;
    }

    if(hasErrorOccured) {
        searchPokemonInputGroup.setAttribute("data-error", "true");
        return;
    }

    searchPokemonInputGroup.setAttribute("data-error", "false");
}