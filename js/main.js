//slider owl corusel 2
$(document).ready(function() {

 $(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
   items: 2,
   margin: 0,
   loop: true,
   nav: false,
   dots: true
  });

  owl.owlCarousel();
  $('.js-owl-prev').click(function() {
   owl.trigger('next.owl.carousel');
  });
  $('.js-owl-next').click(function() {
   owl.trigger('prev.owl.carousel');
  });
  //допустим инстанс содержится в переменной slider, тогда

 });

});

// button menu burger open

$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
  $('.content').toggleClass('content_active');
});

$('.menu-btn').on('click', function(m) {
 m.preventDefault();
 $(this).toggleClass('menu-btn_active');
});

//button menu burger close

$('.menu-close-btn').on('click', function(u) {
 u.preventDefault();
 $('.menu').removeClass('menu_active');
 $('.content').removeClass('content_active');
 $('.menu-btn').removeClass('menu-btn_active'); });
 
 //intro button push and scroll 
 
 $(".a-btn").click(function(){
$("html, body").animate({scrollTop: $("header").height()+ 800 },"slow");

return false;});

// switch language 

var language = window.navigator ? (window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage) : "ru";
language = language.substr(0, 2).toLowerCase();
var thisLanguage = 'ru';
if (language != thisLanguage) {
 switch (language) {
  case 'en':
   window.location.href = window.location.origin + '/en';
   break;
  default:
   break;
 }
}
