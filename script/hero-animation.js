// Parallax
document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const cars = document.querySelector('.cars');
    const backlight = document.querySelector('.backlight');
    const grid = document.querySelector('.grid');
    const hero = document.querySelector('.hero .background');
  
    const heroDepth = -0.2;
    const gridDepth = -0.1;
    const carsDepth = 0.2;
    const backlightDepth = 0.2;
  
    hero.style.transform = `translateY(${scrollPosition * heroDepth}px)`;
    grid.style.transform = `translateY(${scrollPosition * gridDepth}px)`;
    cars.style.transform = `translateY(${scrollPosition * carsDepth}px)`;
    backlight.style.transform = `translateY(${scrollPosition * backlightDepth}px)`;
  });