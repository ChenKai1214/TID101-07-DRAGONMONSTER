const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  //   loop: true,
  //   speed: 1000,
  //   autoplay: true,
  //   autoplay: {
  //     delay: 3000,
  //     pauseOnMouseEnter: true,
  //   },
  loop: true,
  //   effect: "coverflow",
  slidesPerView: "2",
  spaceBetween: 20,
  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  //   clickableClass: "my-pagination-clickable",
  // },

  //   Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
  // coverflowEffect: {
  //   depth: 200,
  //   rotate: 30,
  //   stretch: 0,
  //   slideShadows: false,
  // },
  scrollbar: {
    el: ".swiper-scrollbar",
    clickable: true,
  },
});
