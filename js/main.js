let dropdownMenu = document.getElementById("dropdown-menu");
let dropdownBtn = document.getElementById("dropdown-btn");
// let menu = document.getElementById("menu");
// let menuBtn = document.getElementById("menu-btn");

// menuBtn.onclick = function () {
//   menu.classList.toggle("active");
// };

dropdownBtn.onclick = function () {
  dropdownMenu.classList.toggle("drop-active");
};

$("#mobileIcon").click(function(){
  $('#content').slideUp(500);
  $('#menu').show();
});

$("#close").click(function(){
  $('#menu').hide();
  $('#content').slideDown(500);
});

$("#dashboard").click(function(e) {
  $("#dashboard-content").fadeIn();
  $("#books-content").hide();
  $("#tutorial-content").hide();
  $(this).addClass('nav-mobile-active');

  $('#books').removeClass('nav-mobile-active');
  $('#tutorial').removeClass('nav-mobile-active');
});

$("#books").click(function(e) {
  $("#books-content").fadeIn();
  $("#dashboard-content").hide();
  $("#tutorial-content").hide();
  $(this).addClass('nav-mobile-active');

  $('#dashboard').removeClass('nav-mobile-active');
  $('#tutorial').removeClass('nav-mobile-active');
});

$("#tutorial").click(function(e) {
  $("#tutorial-content").fadeIn();
  $("#dashboard-content").hide();
  $("#books-content").hide();
  $(this).addClass('nav-mobile-active');

  $('#dashboard').removeClass('nav-mobile-active');
  $('#books').removeClass('nav-mobile-active');
});

$("#online-slider").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  variableWidth: true,
  arrows: false,
});

$("#whats-hot__slider").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  variableWidth: true,
  arrows: false,
});

$("#whats-hot__sliderOnline").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
});

$("#whats-hot__offers").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
  variableWidth: true,
});

$("#whats-hot__offers2").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
  variableWidth: true,
});

$("#whats-hot__tutorials").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
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
  variableWidth: true,
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
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
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

$(".wishlist-items__book-close").click(function(){
  $(this).parent().hide();
});

$(".hideBlock").click(function(){
  $(this).parent().hide();
});

$('#check').click(function() {
  $('#paypal').fadeIn();
  $('#cart').hide();
  $('#profile').hide();
});