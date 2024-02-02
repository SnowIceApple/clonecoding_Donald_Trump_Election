$(document).ready(function(){

  $(window).on('scroll', function(){
    if($(window).scrollTop() > 50){
      $('body').addClass('fixed_menu');
    }
    else{
      $('body').removeClass('fixed_menu');
    }
  });

  $('.mobile_menu_btn').on('click', function(){
    $(window).scrollTop(0);
    $(this).toggleClass('active');
    $('.mobile_menu').toggleClass('active');
    $('body').toggleClass('mobile_nav_active');
  });

  $(window).on('resize', function(){
    if($(window).innerWidth() > 1020){
      $('.mobile_menu_btn').removeClass('active');
      $('.mobile_menu').removeClass('active');
      $('body').removeClass('mobile_nav_active');
    }

  });

    var swiper1 = new Swiper('.swiper1', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        // effect: 'coverflow',
        //     coverflowEffect: {
        //       rotate: 60,
        //       depth: 150,
        //       stretch: -120,
        //       modifier: 1,
        //       scale: 1,
        //       slideShadows : false,
        //     },
        

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        Breakpoints :{
           670: {
            autoHeight: true,
           },
        },

      });




      $('.vl_tab_btn > a').on('click', function(e){
        e.preventDefault();
        $('.vision_deco_img').addClass('active');

        const tg = $(this);

        if($(window).innerWidth() > 670){
          tg.parent().parent('li').addClass('active').siblings().removeClass('active');
        }
        else{
          tg.parent().parent('li').toggleClass('active').siblings().removeClass('active');
        }
      });

      $(window).on('resize', function(){
      });
});