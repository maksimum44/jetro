
$(function(){

  $('.sl').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    fade: false,
    easing: 'swing',
    appendArrows: '.slick-arrow',
    prevArrow: '.button-arrow-prev',
    nextArrow: '.button-arrow-next',
    asNavFor: '.slider-nav'
  });
  
  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.sl',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    infinite: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 905,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 2,
        }
      },
    ]      
  });
  
  $('.header__menu-mini').on('click', function(){
      // console.log('test');
      $('.header__menu ul').slideToggle();
    });


    
});
