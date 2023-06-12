var mySwiper = new Swiper(".swiper-container", {
  speed: 400,
  initialSlide: 0,
  loop: true,
  autoplay: 5000,
  effect: "slide",
  spaceBetween: 0,
  slidesPerView: 1,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  slidesOffsetBefore: 0,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
