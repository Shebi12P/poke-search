export const toggleDropdown = (event) => {
    const dropdownContainer = event.currentTarget;
    const dropdown = dropdownContainer.querySelector(".dropdown");
    const dropdowndIcon = dropdownContainer.querySelector(".dropdown-icon");
    const isExpanded = dropdown.getAttribute("aria-expanded");
    let expand = "false";

    const wasDropdownItemClicked = event.target.classList.contains("dropdown-item");
    if(wasDropdownItemClicked) {
        const newDropdownContainerText = event.target.textContent;
        dropdownContainer.querySelector("p").textContent = newDropdownContainerText;
    }

    if(isExpanded === "false") expand = "true";
    const rotate = expand;

    dropdown.setAttribute("aria-expanded", expand);
    dropdowndIcon.setAttribute("data-rotated", rotate);
}