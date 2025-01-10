// Menu toggle logic
const menu_button = document.querySelector(".header .menu-button");
const menu = document.querySelector(".menu");
const toggleMenu = () => {
    menu_button.classList.toggle("opened");
    document.body.classList.toggle("steady");   
    menu.classList.toggle("closed");
}
menu_button.addEventListener("click", toggleMenu);

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