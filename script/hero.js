const heading = document.querySelector(".hero .headings-container");
const cars = document.querySelector(".hero .cars img");
const backlight = document.querySelector(".hero .backlight");
const heroForm = document.querySelector(".hero .consultation-form");
const safeAreaBottom = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--safe-area-inset-bottom")) || 0;

let layoutAdjusted = false;
let carsAdjusted = false; 

const adjustMargin = (element, property, value) => {
  if (window.innerWidth <= 500) {
    element.style[property] = value;
  }
};

const resetMargins = () => {

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
    heading.style.marginBottom = `${cars.clientHeight - 30}px`; 
  }
};

const adjustCarsHeroMobile = () => {
  const marginBottom = heroForm.clientHeight + safeAreaBottom + "px";
  if (window.innerWidth <= 500 && !carsAdjusted) {

    cars.parentElement.style.marginBottom = marginBottom;
    backlight.style.marginBottom = marginBottom;
    carsAdjusted = true; 
  }
};

const adjustForm = () => {
  adjustMargin(heroForm.parentElement, 'marginBottom', `${safeAreaBottom}px`);
};

const adjustLayout = () => {
  if (window.innerWidth <= 500 && !layoutAdjusted) {
    layoutAdjusted = true;

    requestAnimationFrame(() => {
      adjustHeroMobile();
      adjustCarsHeroMobile();
      adjustForm();
      setRealVH();
    });
  } else if (window.innerWidth > 500) {
    resetMargins();
    layoutAdjusted = false; 
    carsAdjusted = false; 
  }
};

const onLoadAndResize = () => {
  adjustLayout();
};
window.addEventListener("load", onLoadAndResize);
window.addEventListener("resize", onLoadAndResize);
