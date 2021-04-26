//Navigation Bar
window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 150);
})

$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('.menu-toggle').toggleClass('toggle');
        $('.menu').toggleClass('toggle');
    })
})


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplaytimeout: 2000,
    responsive: {
        0: {
            items: 1
        }
    }
});