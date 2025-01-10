// Car view

const rightSlider = document.querySelector(".latest-news .controls .right");
const leftSlider = document.querySelector(".latest-news .controls .left");
const gallery = document.querySelector(".latest-news .latest-news-showcase-list");
document.addEventListener("DOMContentLoaded", () => {
    let galleryItems = gallery.children;
    let currentIndex = 0;
    function scrollItem(index){
        galleryItems[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    function updateControls() {
        if (currentIndex === 0) {
            leftSlider.classList.add('hidden');
        } else {
            leftSlider.classList.remove('hidden');
        }

        if (currentIndex === galleryItems.length - 1) {
            rightSlider.classList.add('hidden');
        } else {
            rightSlider.classList.remove('hidden');
        }
    }
    leftSlider.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            scrollItem(currentIndex);
            updateControls();
        }
    });
    rightSlider.addEventListener('click', () => {
        if (currentIndex < galleryItems.length - 1) {
            currentIndex++;
            scrollItem(currentIndex);
            updateControls();
        }
    });
    updateControls();
});

function checkScrollPosition() {
    const scrollLeft = gallery.scrollLeft;
    const scrollWidth = gallery.scrollWidth;
    const clientWidth = gallery.clientWidth;
    const rightSliderGallery = document.querySelector(".latest-news .controls .right");
    const leftSliderGallery = document.querySelector(".latest-news .controls .left");
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

gallery.addEventListener('scroll', checkScrollPosition);
checkScrollPosition();