// const car = document.querySelector(".hero .cars")
// const backlight = document.querySelector(".hero .backlight")
// const carSlide = () => {
//     if (window.innerWidth > 860){
//         car.classList.remove("hidden");
//         backlight.classList.remove("hidden");

//     }
// }

// carSlide();

  const appearingElements = document.querySelectorAll(".slide-down")
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // No animation for offer in mobile and tablet version
      if (entry.target.classList[0] == "offer-list"){
        if (entry.isIntersecting){
          anime({
            targets: entry.target.children,
            opacity: [0, 1],
            easing: 'easeOutQuad',
            delay: anime.stagger(100),
          })
        }
      }
      if (entry.target.classList[0] == "desc-additional-list" || entry.target.classList[0] == "stats-list" || entry.target.classList[0] == "advantages-list"){
        if (entry.isIntersecting){
          anime({
            targets: entry.target.children,
            opacity: [0, 1],
            translateY: [-30, 0],
            easing: 'easeOutQuad',
            delay: anime.stagger(100),
          });
        }
      }
      if (entry.isIntersecting) {
        anime({
          targets: entry.target,
          opacity: [0, 1],
          translateY: [-30, 0],
          easing: 'easeOutQuad',
          delay: anime.stagger(100),
        });
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0 });
  
  appearingElements.forEach(item => {
    observer.observe(item);
  });