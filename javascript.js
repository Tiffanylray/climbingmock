$(document).ready(() => {
let $deviceWidth = $(window).width();


/* Nav bar function */
  $('.burger').on('click', () => {
    $('.nav-menu').slideToggle('slow');
  }).on('mouseleave', () => {
    $('.nav-menu').hide();
  });


  /* image slider */

  function slideShow() {
    /* configurations */
    let animationSpeed = 1000;
    let pause = 5000;
    let currentSlide = 1;

    /* cache DOM */
    let $slider = $('#slider');
    let $slideContainer = $slider.find('.slides');
    let $slides = $slideContainer.find('.slide');
    let $allSlides = $slideContainer.find('.slide').toArray();

    let interval;

    function startSlider() {
      interval = setInterval(function() {
        $slideContainer.animate({'margin-left' : '-='+$deviceWidth}, animationSpeed, function () {
          currentSlide++;
          if(currentSlide === $slides.length) {
            currentSlide = 1;
            $slideContainer.css('margin-left', 0);
          }
          });
      }, pause);
    };
    startSlider()



  /* End of Image slide function */
  };
  slideShow();

}); /* End of document ready function */
