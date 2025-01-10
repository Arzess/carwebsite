// Marketplace right block width

const marketplaceRightBlock = document.querySelector(".marketplace .marketplace-right-block");
const filter = document.querySelector(".filter")
const tailorRightBlock = () => {
  if (window.innerWidth <= 500){
    marketplaceRightBlock.style.width = "100%";
  }
  else{
    marketplaceRightBlock.style.width = "calc(100% - " + filter.offsetWidth + "px)";

  }
}




// Filter slider
window.onload = function () {
    tailorRightBlock();
    slideOne();
    slideTwo();
  };
  
  let sliderOne = document.getElementById("slider-1");
  let sliderTwo = document.getElementById("slider-2");
  let minGap = 0;
  let sliderTrack = document.querySelector(".slider-track");
  let sliderMaxValue = document.getElementById("slider-1").max;
  
  function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    fillColor();
  }
  function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    fillColor();
  }
  function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, var(--stroke-color-main) ${percent1}% , var(--range-color) ${percent1}% , var(--range-color) ${percent2}%, var(--stroke-color-main) ${percent2}%)`;
  }


const filter_categories = document.querySelectorAll(".category-top")

filter_categories.forEach(category => {
  category.addEventListener("click", (e)=>{
    category.parentElement.classList.toggle("closed")
    
  }
  )
})



window.addEventListener("resize", ()=>{
  tailorRightBlock();
})