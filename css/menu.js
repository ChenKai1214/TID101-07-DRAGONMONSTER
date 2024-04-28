let menu = document.querySelector(".menu");
let menu_close = document.querySelector(".menu_close");
let hamburger = document.querySelector(".hamburger");

menu.addEventListener("click", function () {
  menu_close.style.display = "block";
  hamburger.style.display = "block";
});

menu_close.addEventListener("click", function () {
  menu.style.display = "block";
  hamburger.style.display = "none";
});
