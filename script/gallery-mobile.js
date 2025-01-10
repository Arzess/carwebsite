const newsItemsMobile = document.querySelectorAll('.latest-news-list.mobile .proposition');
const scrollLinksMobile = document.querySelectorAll('.latest-news .scroll-menu.mobile .scroll-link');
const galleryListMobile = document.querySelector('.latest-news-list.mobile');

const observerOptionsMobile = {
    root: galleryListMobile,
    threshold: 0.5,
};
function updateNewsFromScrollMenuMobile(index) {
    newsItemsMobile[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    updateSelectedLinkMobile(index);
}
function updateSelectedLinkMobile(index) {
    scrollLinksMobile.forEach(link => link.classList.remove('selected'));
    if (scrollLinksMobile[index]) {
        scrollLinksMobile[index].classList.add('selected');
    }
}

scrollLinksMobile.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        updateNewsFromScrollMenuMobile(index);
    });
});
const observer_gallery_mobile = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = Array.from(newsItemsMobile).indexOf(entry.target);
            updateSelectedLinkMobile(index);
        }
    });
}, observerOptionsMobile);

newsItemsMobile.forEach(item => observer_gallery_mobile.observe(item));

// // Infinite scroll
// const checkScrollMobile = () => {
//     const scrollWidthMobile = galleryListMobile.scrollWidth * .756;

//   if (galleryListMobile.scrollLeft >= scrollWidthMobile) {
//     galleryListMobile.style.scrollBehavior = "initial";
//     galleryListMobile.scrollLeft = 0;
//     galleryListMobile.style.scrollBehavior = "smooth";

// }
// }
// galleryListMobile.addEventListener('scroll', checkScrollMobile);