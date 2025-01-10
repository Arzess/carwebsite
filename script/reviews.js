// Mobile show-more buttons
const mobileShowMore = document.querySelectorAll(".clients .show-more.mobile")
mobileShowMore.forEach(showmore => {
    showmore.addEventListener("click", ()=>{
        showmore.parentNode.classList.toggle("opened");
    })
})


// Scroll+Menu

const reviewItems = document.querySelectorAll('.clients .review');
const scrollLinksReviews = document.querySelectorAll('.clients .scroll-menu.mobile .scroll-link');
const galleryListReviews = document.querySelector('.clients .reviews-gallery');
const observerOptionsReviews = {
    root: galleryListReviews,
    threshold: 0.5,
};
function updateReviewsFromScrollMenu(index) {
    
    reviewItems[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    updateSelectedLinkReviews(index);
}
function updateSelectedLinkReviews(index) {

    scrollLinksReviews.forEach(link => link.classList.remove('selected'));
    if (scrollLinksReviews[index]) {
        scrollLinksReviews[index].classList.add('selected');
    }
}

scrollLinksReviews.forEach((link, index) => {
    link.addEventListener('click', (event) => {

        event.preventDefault();
        updateReviewsFromScrollMenu(index);
    });
});
const observer_gallery_reviews = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = Array.from(reviewItems).indexOf(entry.target);
            updateSelectedLinkReviews(index);
        }
    });
}, observerOptionsReviews);

reviewItems.forEach(item => observer_gallery_reviews.observe(item));
