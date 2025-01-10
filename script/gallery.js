const newsItems = document.querySelectorAll('.latest-news-showcase-list .piece-of-news');
const scrollLinks = document.querySelectorAll('.scroll-menu .scroll-link');
const galleryList = document.querySelector('.latest-news .latest-news-showcase-list');
const observerOptions = {
    root: galleryList,
    threshold: 0.5,
};
function updateNewsFromScrollMenu(index) {
    newsItems[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const showMoreButton = newsItems[index]?.querySelector('.show-more');
    if (showMoreButton) {
        showMoreButton.click();
    }
    updateSelectedLink(index);
}
function updateSelectedLink(index) {
    scrollLinks.forEach(link => link.classList.remove('selected'));
    if (scrollLinks[index]) {
        scrollLinks[index].classList.add('selected');
    }
}

scrollLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        updateNewsFromScrollMenu(index);
    });
});
const observer_gallery = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = Array.from(newsItems).indexOf(entry.target);
            updateSelectedLink(index);
        }
    });
}, observerOptions);

newsItems.forEach(item => observer_gallery.observe(item));


// Infinite scroll

// galleryList.innerHTML += galleryList.innerHTML;


// const checkScroll = () => {
//     const scrollWidth = galleryList.scrollWidth * .65;

//   if (galleryList.scrollLeft >= scrollWidth) {
//     galleryList.style.scrollBehavior = "initial";
//     galleryList.scrollLeft = 0;
//     galleryList.style.scrollBehavior = "smooth";

// }
// }
// galleryList.addEventListener('scroll', checkScroll);