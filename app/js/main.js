$(function () {


  $('.slidertop__inner').slick({
    dots: true,
    arrows: false
  });

  $('.video__slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    arrows: false,
    variableWidth: true
  });

  $('.sliderbottom__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.sliderbottom__nav'
  });
  $('.sliderbottom__nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.sliderbottom__inner',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });


});