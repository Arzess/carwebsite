// Menu toggle logic
const menuButton = document.querySelector(".header .menu-button");
const menu = document.querySelector(".menu");
const innerMenuClose = document.querySelector(".menu .close .close-button");
const toggleMenu = () => {
  document.body.classList.toggle("steady");
  menuButton.classList.toggle("opened");
  menu.classList.toggle("closed");
};
function preventBodyScroll(e) {
  if (document.body.classList.contains("steady") && !e.target.closest('.scrollable')){
    e.preventDefault();
  }
}

// Prevent body scrolling, but allow for elements with the "scrollable" class
document.body.addEventListener('wheel', preventBodyScroll, { passive: false });
document.body.addEventListener('touchmove', preventBodyScroll, { passive: false });

innerMenuClose.addEventListener("click", toggleMenu)
menuButton.addEventListener("click", toggleMenu);

// Form logic

const forms = document.querySelectorAll("form");
forms.forEach(element => {
    element.addEventListener("submit", (e)=>{
        e.preventDefault(); // no refresh
        element.classList.add("submitted");
    })
});

// Select elements
const languageSelect = document.querySelectorAll('.language-select');
const selectedOption = document.querySelectorAll('.selected-option');
const optionsContainer = document.querySelector('.options-container');
const options = document.querySelectorAll('.option.language');
selectedOption.forEach(b => {
    b.addEventListener('click', () => {
        b.parentElement.classList.toggle('active');
      });
})

options.forEach(option => {
  option.addEventListener('click', () => {
    const countryName = option.querySelector('.country-name').textContent;
    option.parentElement.parentElement.querySelector('.country-name').textContent = countryName;
    if (option.classList[1] == "form"){
        option.parentElement.parentElement.classList.remove('active');
        return;
    }
    if (option.getAttribute("data-value") == "RU"){
        option.parentElement.parentElement.classList.remove('active');
        return;
    }
    const flagSrc = option.querySelector('.flag').src;

    option.parentElement.parentElement.querySelector('.flag').src = flagSrc;
    option.parentElement.parentElement.classList.remove('active');
  });
});
document.addEventListener('click', (e) => {
  languageSelect.forEach(select => {
    if (!select.contains(e.target)){
      select.classList.remove("active");
    }
  })
});

