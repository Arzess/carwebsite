// Car view

const carViewRightSlider = document.querySelector(".car-view .gallery-and-stats .controls .right");
const carViewLeftSlider = document.querySelector(".car-view .gallery-and-stats .controls .left");
const carViewGallery = document.querySelector(".car-view .gallery-and-stats .gallery-list");
const carViewMainPicture = document.querySelector(".car-view .main-img-container");

// carViewMainPicture.addEventListener("click", ()=>{
//     carViewMainPicture.parentElement.classList.toggle("active");
// })
carViewRightSlider.addEventListener("click", ()=>{
    carViewGallery.scrollLeft += 100;
})
carViewLeftSlider.addEventListener("click", ()=>{
    carViewGallery.scrollLeft -= 100;
})

const checkCars = () => {
    if (carViewGallery.children.length <= 4){
        carViewGallery.style.justifyContent = "center";
        stats = document.querySelector(".car-view-stats");
    }
    else{
        carViewGallery.style.justifyContent = "flex-start";
    }
}

// Image click
const carViewGalleryObject = document.querySelector(".gallery");
carViewMainPicture.parentElement.querySelector(".close").addEventListener("click", ()=>{
    carViewMainPicture.parentElement.classList.remove("fullscreen");
    // carViewGalleryObject.style.width = "100%";
    carViewMainPicture.parentElement.parentElement.parentElement.classList.remove("fullscreen");
    document.body.classList.remove("no-scroll");
    document.body.classList.remove("blurred");
})
carViewMainPicture.addEventListener("click", (e)=>{
    if (e.target.classList[0] == "main-img"){
        carViewMainPicture.parentElement.classList.add("fullscreen");
        carViewMainPicture.parentElement.parentElement.parentElement.classList.add("fullscreen");
        // carViewGallery.style.width = "calc(" + (carViewGallery.children[1].children.length)*100 + "%)";
        
        // carViewGalleryObject.style.width = "calc(" + 100 + "%)";
        document.body.classList.add("no-scroll");
        // Blur
        document.body.classList.add("blurred");
    }
})

const galleryList = document.querySelector('.gallery-list');
    const mainImg = document.querySelector('.main-img');
 galleryItems = document.querySelectorAll('.gallery-img');
    const leftControl = document.querySelector('.main-img-container .controls .left');
    const rightControl = document.querySelector('.main-img-container .controls .right');
    let currentIndex = 0;
    function updateControls() {
        if (currentIndex === 0) {
            leftControl.classList.add('hidden');
        } else {
            leftControl.classList.remove('hidden');
        }

        if (currentIndex === galleryItems.length - 1) {
            rightControl.classList.add('hidden');
        } else {
            rightControl.classList.remove('hidden');
        }
    }
    rightControl.addEventListener('click', () => {
        if (currentIndex < galleryItems.length - 1) {
            currentIndex++;
            mainImg.src = galleryItems[currentIndex].querySelector('img').src;
            updateControls();
        }
    });
    leftControl.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            mainImg.src = galleryItems[currentIndex].querySelector('img').src;
            updateControls();
        }
    });
    updateControls();

function checkScrollPosition() {
    const scrollLeft = galleryList.scrollLeft;
    const scrollWidth = galleryList.scrollWidth;
    const clientWidth = galleryList.clientWidth;
    const rightSliderGallery = document.querySelector(".car-view .gallery .controls .right");
    const leftSliderGallery = document.querySelector(".car-view .gallery .controls .left");
    if (scrollLeft === 0) {
        leftSliderGallery.classList.add("hidden");
    } else {
        leftSliderGallery.classList.remove("hidden");
    }
    if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth) {
        rightSliderGallery.classList.add("hidden");
    } else {
        rightSliderGallery.classList.remove("hidden");
    }
}

galleryList.addEventListener('scroll', checkScrollPosition);
checkScrollPosition();

// Infinite scroll
function addMoreImages() {
    const images = galleryList.querySelectorAll('li');
    images.forEach((img) => {
      const clone = img.cloneNode(true);
      galleryList.appendChild(clone);
    });
  }
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        mainImg.src = item.querySelector('img').src;
        currentIndex = index;
        updateControls();
    });
});
galleryList.addEventListener('scroll', () => {
    if (galleryList.scrollLeft + galleryList.clientWidth >= galleryList.scrollWidth - 100) {
      addMoreImages();
    galleryItems = document.querySelectorAll('.gallery-img');
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            mainImg.src = item.querySelector('img').src;
            currentIndex = index;
            updateControls();
        });
    });
    }
});
document.addEventListener("DOMContentLoaded", checkCars);
window.addEventListener("resize", checkCars);