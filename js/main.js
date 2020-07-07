// let dropdownMenu = document.getElementById("dropdown-menu");
// let dropdownBtn = document.getElementById("dropdown-btn");
// let menu = document.getElementById("menu");
// let menuBtn = document.getElementById("menu-btn");

// menuBtn.onclick = function () {
//   menu.classList.toggle("active");
// };

// dropdownBtn.onclick = function () {
//   dropdownMenu.classList.toggle("drop-active");
// };

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

$("#history-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  appendArrows: $('.history-video__controls'),
  prevArrow: '<a href="#"><i class="fas fa-arrow-left fa-2x"></i></a>',
  nextArrow: '<a href="#"><i class="fas fa-arrow-right fa-2x"></i></a>',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$(".info-line-a").click(function(e) {
  $(".info-line-a").removeClass('info-line-a__active');
  $(this).addClass('info-line-a__active');

  $('.block').removeClass('block-active');
  $($(this).attr('data-class')).addClass('block-active');
});

$("#fl_inp").change(function(){
      var filename = $(this).val().replace(/.*\\/, "");
      $("#fl_nm").html(filename);
});




