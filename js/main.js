$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        autoplayDisableOnInteraction: false,
        autoplay: 5000,
        effect: 'fade'
    });

    $('.navbar-toggle').on('click', function() {
        $('.navbar-collapse').slideToggle();
    });
});