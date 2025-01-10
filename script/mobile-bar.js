const mobileNavBar = document.querySelector(".mobile-navbar")
window.addEventListener("scroll", ()=>{
    if (window.scrollY > 100){
        mobileNavBar.classList.add("shown")
    }
    else{
        mobileNavBar.classList.remove("shown")
    }
})