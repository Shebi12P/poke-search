export const toggleDropdown = (event) => {
    const dropdownContainer = event.currentTarget;
    const dropdown = dropdownContainer.querySelector(".dropdown");
    const dropDownItems = dropdown.querySelectorAll(".dropdown-item");
    const dropdowndIcon = dropdownContainer.querySelector(".dropdown-icon");
    const isExpanded = dropdown.getAttribute("aria-expanded");
    let expand = true;

    const wasDropdownItemClicked = event.target.classList.contains("dropdown-item");
    if(wasDropdownItemClicked) {
        const newDropdownContainerText = event.target.textContent;
        dropdownContainer.querySelector("p").textContent = newDropdownContainerText;
    }

    if(isExpanded === "true") {
        expand = false;
        dropDownItems.forEach(dropDownItem => {
            dropDownItem.removeAttribute("tabindex");
        })
    }
    
    const rotate = expand;

    if(isExpanded === "false") {
        dropDownItems.forEach(dropdownItem => {
            dropdownItem.setAttribute("tabindex", "0");
        })
    }

    dropdown.setAttribute("aria-expanded", expand.toString());
    dropdowndIcon.setAttribute("data-rotated", rotate.toString());
}