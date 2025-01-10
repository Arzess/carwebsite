const heading = document.querySelector(".hero .headings-container");
const cars = document.querySelector(".hero .cars img");
const backlight = document.querySelector(".hero .backlight");
const heroForm = document.querySelector(".hero .consultation-form");
const safeAreaBottom = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--safe-area-inset-bottom")) || 0;

let layoutAdjusted = false;

const adjustMargin = (element, property, value) => {
  if (window.innerWidth <= 500) {
    element.style[property] = value;
  } else {
    element.style[property] = 0;
  }
};

const setRealVH = () => {
  const vh = window.innerHeight * 0.01; // Calculate 1% of the viewport height
  document.documentElement.style.setProperty('--real-vh', `${vh}px`);
};

const adjustHeroMobile = () => {
  if (window.innerWidth <= 500) {
    heading.style.marginBottom = `${cars.clientHeight - 30}px`;
  } else {
    heading.style.marginBottom = 0;
  }
};

const adjustCarsHeroMobile = () => {
  const marginBottom = heroForm.clientHeight + safeAreaBottom + "px";
  if (window.innerWidth <= 500) {
    cars.parentElement.style.marginBottom = marginBottom;
    backlight.style.marginBottom = marginBottom;
  } else {
    cars.parentElement.style.marginBottom = 0;
    backlight.style.marginBottom = "50px";
  }
};

const adjustForm = () => {
  adjustMargin(heroForm.parentElement, 'marginBottom', `${safeAreaBottom}px`);
};

const adjustLayout = () => {
  if (!layoutAdjusted) {
    layoutAdjusted = true;

    requestAnimationFrame(() => {
      adjustHeroMobile();
      adjustCarsHeroMobile();
      adjustForm();
      setRealVH();
    });
  }
};

const onLoadAndResize = () => {
  adjustLayout();
  window.removeEventListener("resize", onLoadAndResize); 
};

window.addEventListener("load", onLoadAndResize);
window.addEventListener("resize", onLoadAndResize);
