let section = document.querySelector(".best-offers")




const adjustOffers = (section) => {
    let offers = section.querySelectorAll("li.offer");

    let biggest = offers[0];
    let height = biggest.querySelector('.offer-name').clientHeight;
    offers.forEach(offer => {
        if (offer.querySelector('.offer-name').clientHeight > height){
            height = offer.querySelector('.offer-name').clientHeight;
        }
    })
    
    offers.forEach(offer => {
        offer.querySelector('.offer-name').style.height = height+"px";
    })
}

adjustOffers(section);

window.addEventListener("resize", adjustOffers(section));