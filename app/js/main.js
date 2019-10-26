$(function () {

  $('.slidertop__inner').slick({
    dots: true,
    arrows: false
  });

  $('.video__slider').slick({
    centerMode: true,
    slidesToShow: 1,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
          breakpoint: 720,
          settings: "unslick"
      }
  ]
  });

  $('.sliderbottom__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.sliderbottom__nav',
  });

  $('.sliderbottom__nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.sliderbottom__inner',
    dots: false,
    variableWidth: true,
    focusOnSelect: true,
  });

  // всплывающее меню
  $('.header__menu-btn').on('click', function(){
    $('.header__menu > ul').slideToggle();
  });

  // Кнопка возврата вверх страницы
  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
    $('.scrollup').fadeIn();
    } else {
    $('.scrollup').fadeOut();
    }
  }); 
  
  // Плавный скролл к элементам меню
  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });


});