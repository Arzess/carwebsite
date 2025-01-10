const heading = document.querySelector(".hero .headings-container");

const cars = document.querySelector(".hero .cars img")
const backlight = document.querySelector(".hero .backlight")
const heroForm = document.querySelector(".hero .consultation-form")
const mobileNavBar = document.querySelector(".mobile-navbar")
const navBarHeight = 120;
const safeAreaBottom = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--safe-area-inset-bottom")) || 0;
const adjustHeroMobile = () => {
    if (window.innerWidth <= 500){
        heading.style.marginBottom = cars.clientHeight-30 + "px"; 
    }
    else{
        heading.style.marginBottom = 0;
    }
}
const adjustCarsHeroMobile = () => {
    if (window.innerWidth <= 500){
        cars.parentElement.style.marginBottom = heroForm.clientHeight+safeAreaBottom+"px"
        backlight.style.marginBottom = heroForm.clientHeight+safeAreaBottom+"px"
    }
    else{
        backlight.style.marginBottom = 50 + "px";
        cars.parentElement.style.marginBottom = 0;
    }
}
const adjustForm = () => {
    if (window.innerWidth <= 500){
        heroForm.parentElement.style.marginBottom = safeAreaBottom + "px";
    }
    else{
        heroForm.parentElement.style.marginBottom = 0;
    }
}
adjustHeroMobile()
adjustCarsHeroMobile()
adjustForm()
window.addEventListener("resize", ()=>{
    adjustCarsHeroMobile();
    adjustHeroMobile();
    adjustForm();
})