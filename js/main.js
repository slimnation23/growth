let dropdownMenu = document.getElementById("dropdown-menu");
let dropdownBtn = document.getElementById("dropdown-btn");
let menu = document.getElementById("menu");
let menuBtn = document.getElementById("menu-btn");

menuBtn.onclick = function () {
  menu.classList.toggle("active");
};

dropdownBtn.onclick = function () {
  dropdownMenu.classList.toggle("drop-active");
};

$("#online-slider").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  variableWidth: true,
  arrows: false,
});

$("#qualified-slider").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2100,
    variableWidth: true,
    arrows: false,
  });
