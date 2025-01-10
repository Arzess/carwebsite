const heading = document.querySelector(".hero .headings-container");
const cars = document.querySelector(".hero .cars img");
const backlight = document.querySelector(".hero .backlight");
const heroForm = document.querySelector(".hero .consultation-form");
const safeAreaBottom = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--safe-area-inset-bottom")) || 0;

let layoutAdjusted = false; // Flag to track if layout has been adjusted already
let carsAdjusted = false; // Flag to track if the cars have been adjusted

const adjustMargin = (element, property, value) => {
  if (window.innerWidth <= 500) {
    element.style[property] = value;
  }
};

const resetMargins = () => {
  // Reset to default when the screen is wider than 500px
  heading.style.marginBottom = 0;
  cars.parentElement.style.marginBottom = 0;
  backlight.style.marginBottom = "50px";
  heroForm.parentElement.style.marginBottom = 0;
};

const setRealVH = () => {
  const vh = window.innerHeight * 0.01; // Calculate 1% of the viewport height
  document.documentElement.style.setProperty('--real-vh', `${vh}px`);
};

const adjustHeroMobile = () => {
  if (window.innerWidth <= 500) {
    heading.style.marginBottom = `${cars.clientHeight - 30}px`; // Adjust heading container based on the cars height
  }
};

const adjustCarsHeroMobile = () => {
  const marginBottom = heroForm.clientHeight + safeAreaBottom + "px";
  if (window.innerWidth <= 500 && !carsAdjusted) {
    // Set the cars margin only once when the screen is <= 500px
    cars.parentElement.style.marginBottom = marginBottom;
    backlight.style.marginBottom = marginBottom;
    carsAdjusted = true; // Mark that cars have been adjusted
  }
};

const adjustForm = () => {
  adjustMargin(heroForm.parentElement, 'marginBottom', `${safeAreaBottom}px`);
};

const adjustLayout = () => {
  if (window.innerWidth <= 500 && !layoutAdjusted) { // Only adjust if screen is <= 500px and not adjusted yet
    layoutAdjusted = true; // Prevent further adjustments

    requestAnimationFrame(() => {
      adjustHeroMobile();
      adjustCarsHeroMobile();
      adjustForm();
      setRealVH();
    });
  } else if (window.innerWidth > 500) {
    resetMargins(); // Reset margins when the screen is larger than 500px
    layoutAdjusted = false; // Allow adjustments again when going back to mobile version
    carsAdjusted = false; // Reset cars adjustment flag
  }
};

// Event listener for page load and first resize
const onLoadAndResize = () => {
  adjustLayout();
};

// Trigger layout adjustments on initial load and resize
window.addEventListener("load", onLoadAndResize);
window.addEventListener("resize", onLoadAndResize);
