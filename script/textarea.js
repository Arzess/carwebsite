const initializePlaceholders = () => {
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((area) => {
        const placeholder = area.parentElement.querySelector(".placeholder");
        area.addEventListener("focus", () => placeholder.classList.remove("shown"));
        area.addEventListener("input", () => updatePlaceholder(area, placeholder));
        // appear when unfocused
        area.addEventListener("blur", () => {
            if (area.value.trim() === "") {
                placeholder.classList.add("shown");
            }
        });
    });
};

const updatePlaceholder = (placeholder) => {
    placeholder.classList.remove("shown")
};

document.addEventListener("DOMContentLoaded", initializePlaceholders);
