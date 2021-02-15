//Navigation Bar
window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
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