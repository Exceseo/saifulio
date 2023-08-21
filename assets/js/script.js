$(function(){

    //----------- Mobile Manu ------------------
    $(".mobile-manu-btn").click(function(){
        $(".mobile-manu").slideToggle();
    });

    $(".mobile-manu ul .under-submanu a").click(function(){
        $(this).siblings('#nav-submanu').slideToggle();
    });

    //----------- Popup video ------------------
      $(".video-btn a").magnificPopup({
            type: 'iframe',

            iframe: {
                patterns: {
                  youtube: {
                    index: 'youtube.com/', 
                    src: 'https:///www.youtube.com/embed/%id%?autoplay=1',
                  },
                },
              },
          });

          
    //----------- Counter ------------------
      $('.counter').counterUp({
        delay: 10,
        time: 1000
      });


      //----------- Feedback Slider ---------------
      $('.feedback-slider').slick({
        arrows: 'false',
        slidesToShow: 3, 
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [
          {
            breakpoint: 1490,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 1201,
            settings: {
              slidesToShow: 1,
            }
          },

        ]
      });







});