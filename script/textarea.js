const initializePlaceholders = () => {
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach(area => {
        const placeholder = area.parentElement.querySelector(".placeholder");
  
        togglePlaceholder(area, placeholder);

        area.addEventListener("focus", () => placeholder.classList.remove("shown"));
        area.addEventListener("blur", () => togglePlaceholder(area, placeholder));
        area.addEventListener("input", () => togglePlaceholder(area, placeholder));
    });
};

const togglePlaceholder = (textarea, placeholder) => {
    if (textarea.value.trim() === "") {
        placeholder.classList.add("shown");
    } else {
        placeholder.classList.remove("shown");
    }
};

document.addEventListener("DOMContentLoaded", initializePlaceholders);
