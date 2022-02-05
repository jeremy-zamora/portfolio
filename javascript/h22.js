
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $("#header").addClass("sticky");
        } else {
            $("#header").removeClass("sticky");
        }

    });

});


function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if  (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)


/*
ScrollReveal({
    reset:true,
    distance:'50px',
    duration:1800,
    delay:400,
});
ScrollReveal().reveal('h1', {delay:200, origin:'top'});
ScrollReveal().reveal('.main_title', {delay:500, origin:'left'});
ScrollReveal().reveal('.text', {delay:600, origin:'top'});
ScrollReveal().reveal('.box', {delay:700, origin:'bottom', interval:200});*/

const sr = ScrollReveal({
    reset:true,
    distance:'50px',
    duration:1800,
});
sr.reveal('h1', {origin:'top'});
sr.reveal('.main_title', {origin:'left'});
sr.reveal('p', {origin:'right'});
sr.reveal('.text, .player, .box_line2', { origin:'top'});
sr.reveal('.box, video, .container2, .contact__card', {origin:'bottom', interval:200});





