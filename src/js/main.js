$(document).ready(function () {
  $(".internet__film-carousel").slick({
    speed: 500,
    fade: true,
    cssEase: "linear",
    arrows: false,
    autoplay: true,
    dots: true,
    dotsClass: "dots",
    appendDots: $(".internet__buy"),
  });

  $(".internet__video-carousel").slick({
    speed: 500,
    cssEase: "linear",
    arrows: true,
    prevArrow:
      '<div class="prevArrow"><img src="./img/internet/arrow-left.png" alt=""></div>',
    nextArrow:
      '<div class="nextArrow"><img src="./img/internet/arrow-right.png" alt=""></div>',
  });

  $(".your-packages__film-carousel").slick({
    speed: 500,
    cssEase: "linear",
    arrows: true,
    prevArrow:
      '<div class="prevArrow"><img src="./img/internet/arrow-left.png" alt=""></div>',
    nextArrow:
      '<div class="nextArrow"><img src="./img/internet/arrow-right.png" alt=""></div>',
  });

  $(".logo__icon").click(function () {
    $(".dd-menu").toggleClass("dd-menu_open");
  });

  $('.propositions__aplication').mouseover(function(){
    $('.propositions__app-layout').addClass('visible');
  })

  $('.propositions__aplication').mouseleave(function(){
    $('.propositions__app-layout').removeClass('visible');
  })
});
