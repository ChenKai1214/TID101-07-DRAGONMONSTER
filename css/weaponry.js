const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  //   speed: 1000,
  //   autoplay: {
  //     delay: 3000,
  //   },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    clickableClass: "my-pagination-clickable",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
});

let close_btn = document.querySelector(".close");
close_btn.addEventListener("mouseenter", function () {
  this.src = "../圖片/close_white1.png";
});
close_btn.addEventListener("mouseleave", function () {
  this.src = "../圖片/close_white.png";
});
