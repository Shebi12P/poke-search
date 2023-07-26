export const toggleDropdown = (event) => {
    // const clickedObject = event.target;
    // if(clickedObject.classList.contains("dropdown-item")) return;
    
    const clickedDropdownContainer = event.currentTarget;
    const dropdown = clickedDropdownContainer.querySelector(".dropdown");
    const dropdowndIcon = clickedDropdownContainer.querySelector(".dropdown-icon");
    const isExpanded = dropdown.getAttribute("aria-expanded");
    let expand = "false";

    if(isExpanded === "false") expand = "true";
    const rotate = expand;

    dropdown.setAttribute("aria-expanded", expand);
    dropdowndIcon.setAttribute("data-rotated", rotate);
}