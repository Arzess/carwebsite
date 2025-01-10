window.addEventListener("scroll", ()=>{
    if (window.pageYOffset > 100){
        mobileNavBar.classList.add("shown")
    }
    else{
        mobileNavBar.classList.remove("shown")
    }
})