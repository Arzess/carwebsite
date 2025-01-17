// Marketplace right block width

const marketplaceRightBlock = document.querySelector(".marketplace .marketplace-right-block");
const filter = document.querySelector(".filter")

const filterTop = filter.querySelector(".filter-top")
filterTop.addEventListener("click", ()=>{
  if (window.innerWidth <= 500){
    filter.classList.toggle("closed");
  }
})

const tailorRightBlock = () => {
  if (window.innerWidth <= 500){
    marketplaceRightBlock.style.width = "100%";
  }
  else{
    let calculatedWidth = filter.offsetWidth+10
    marketplaceRightBlock.style.width = "calc(100% - " + calculatedWidth + "px)";

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

const adjustScrollbar = () => {
  const container = document.querySelector('.filter');
  const content = document.querySelector('.filter .filter-base');
  if (content.scrollHeight > container.clientHeight) {
    container.style.overflowY = 'auto';
  } else {
    container.style.overflowY = 'hidden'; 
  }
};

document.addEventListener('DOMContentLoaded', adjustScrollbar);  // Call on page load

window.addEventListener('resize', adjustScrollbar);

window.addEventListener("resize", ()=>{
  tailorRightBlock();
})
document.addEventListener("DOMContentLoaded", () => {
  const container = filter.parentElement;
  const offsetTop = filter.offsetTop;
  window.addEventListener("scroll", () => {
    if (window.innerWidth > 500){
      const scrollY = window.scrollY;
      const containerRect = container.getBoundingClientRect();
      const filter = document.querySelector(".filter .filter-base");  
      if (scrollY > offsetTop) {
        const maxStickyHeight = container.offsetTop + container.offsetHeight - filter.offsetHeight + 70;


          if (scrollY < maxStickyHeight) {
              let scrollHeightFilter = scrollY - offsetTop - 20 - 70;
              if (scrollHeightFilter < 0){
                scrollHeightFilter = 0
              }
              filter.style.top = `${scrollHeightFilter}px`;
              filter.parentElement.style.alignItems = `start`
          } else {
              filter.style.top = `0`;
              filter.parentElement.style.alignItems = `flex-end` 
          }
      } else {
          filter.style.top = "0";
          filter.parentElement.style.alignItems = `start`
      }
    }  
    
  });
});
