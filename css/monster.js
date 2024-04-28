let close = document.querySelector(".close");
close.addEventListener("mouseenter", function () {
  this.src = "../圖片/close_white1.png";
});
close.addEventListener("mouseleave", function () {
  this.src = "../圖片/close_white.png";
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 2,
  breakpoints: {
    1400: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 5,
    },
    950: {
      slidesPerView: 4,
    },
    700: {
      slidesPerView: 3,
    },
  },
  loop: true,
  effect: "coverFlow",
  //   speed: 1000,
  //   autoplay: {
  //     delay: 3000,
  //   },

  // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //     clickableClass: "my-pagination-clickable",
  //   },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
});
