const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const menu_item = document.querySelectorAll(".hero .navbar .nav-menu li a");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


menu_item.forEach(item=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    });

});