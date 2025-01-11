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


// Mobile
const mobileGallery = document.querySelector(".car-view .offer.mobile .gallery-list");
const galleryImagesCarView = document.querySelectorAll(".car-view .offer.mobile .gallery-list .gallery-unit");

const mainPicture = document.querySelector(".car-view .offer.mobile .main-img");
const getBackMobile = document.querySelector(".car-view .offer.mobile .get-back");
const closeButton = document.querySelector(".car-view .offer.mobile .close-button");
const removeSelected = (galleryImages) => {
    galleryImages.forEach(image => {
        image.classList.remove("selected");
    })
}
if (window.innerWidth <= 500){
    mobileGallery.addEventListener("click", ()=>{
        document.querySelector(".offer-name-img").classList.add("clicked");
        document.body.classList.add("no-scroll")
        document.querySelector(".car-view").classList.add("over")
        document.body.classList.add("steady")
    })
    closeButton.addEventListener("click", ()=>{
        document.querySelector(".offer-name-img").classList.remove("clicked");
        document.body.classList.remove("steady")
        document.querySelector(".offer-name-img").classList.remove("single");
        mobileGallery.classList.add("scrollable")
        getBackMobile.classList.remove("shown")
        document.body.classList.remove("no-scroll")
        document.querySelector(".car-view").classList.remove("over");
    })
    getBackMobile.addEventListener("click", ()=>{
        mobileGallery.classList.add("scrollable")
        getBackMobile.classList.remove("shown")
        document.body.classList.add("no-scroll")
        document.querySelector(".offer-name-img").classList.remove("single");
        document.querySelector(".offer-name-img").classList.add("clicked");
        document.querySelector(".car-view").classList.add("over")
    })
    galleryImagesCarView.forEach(i => {    
        i.addEventListener("click", ()=>{
            if (document.querySelector(".offer-name-img").classList.contains("clicked")){
                getBackMobile.classList.add("shown")
                document.body.classList.add("no-scroll")
                mobileGallery.classList.remove("scrollable")
                document.querySelector(".offer-name-img").classList.add("single");
                // Remove all previous selected classes
                removeSelected(galleryImagesCarView);
                i.classList.add("selected");
                let copySrc = i.children[0].getAttribute("src");
                mainPicture.children[1].src = copySrc;
            }     
        }) 
        
    })
// Arrow logic
const controls = document.querySelector(".offer.mobile .controls");
const leftArrow = controls.children[0];
const rightArrow = controls.children[1];

let currentMobileIndex = 0;

const updateMobileGallery = () => {
    removeSelected(galleryImagesCarView);
    galleryImagesCarView[currentMobileIndex].classList.add("selected");
    const newSrc = galleryImagesCarView[currentMobileIndex].children[0].getAttribute("src");
    mainPicture.children[1].src = newSrc;
};

leftArrow.addEventListener("click", () => {
    if (currentMobileIndex > 0) {
        currentMobileIndex--;
        updateMobileGallery();
    }
    else{
        currentMobileIndex = galleryImagesCarView.length-1;
    }
});

rightArrow.addEventListener("click", () => {
    if (currentMobileIndex < galleryImagesCarView.length - 1) {
        currentMobileIndex++;
        updateMobileGallery();
    }
    else{
        currentMobileIndex = 0;
    }
});


mainPicture.addEventListener("click", (e) => {
    if (!e.target.closest(".left") && !e.target.closest(".right")) {
        // Original image
        location.href = mainPicture.children[1].src;
    }
});
}   

