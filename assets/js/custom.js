$(document).ready(function () {
  // Swiper: Slider
  new Swiper(".swiper-container", {
    loop: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 40,
    breakpoints: {
      1920: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1028: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
});


$(".toggle").click(function () {
    $("header").addClass("menuToggle");
});
$(".close, .close_overlay").click(function () {
  $("header").removeClass("menuToggle");
});

AOS.init({
  duration: 1200,
});
