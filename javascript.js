$(document).ready(() => {
let $deviceWidth = $(window).width();


/* Nav bar function */
  $('.burger').on('click', () => {
    $('.nav-menu').slideToggle('slow');
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
    let $slideCount = $slideContainer.children().length;
    let $slideWidthPc = 100.0 / $slideCount;
    let interval;

    (function startSlider() {
      interval = setInterval(function() {
        $slideContainer.animate({'margin-left' : '-='+$deviceWidth}, animationSpeed, function () {
          currentSlide++;;
          if(currentSlide === $slides.length) {
            currentSlide = 1;
            $slideContainer.css('margin-left', 0);
          }
          });
      }, pause);
    };
    startSlider()

    /* Set-up for Arrows */
    let $arrowContainer = $('.arrow-container');
    let $leftArrow = $arrowContainer.find('.arrow-left');
    let $rightArrow = $arrowContainer.find('.arrow-right');

    /* Left Arrow */
    $leftArrow.on('click', function() {
      clearInterval(interval);
      if (currentSlide === 1) {
        currentSlide = $slideCount - 1;
        let lastSlideWidth = -(($slideCount - 2) * $deviceWidth);
        $slideContainer.css({'margin-left' :  lastSlideWidth});
        startSlider();
      } else {
        currentSlide -= 1;
        $slideContainer.css('margin-left', '+='+$deviceWidth);
        startSlider();
      };
    });

    /* Right Arrow */
    $rightArrow.on('click', function() {
      clearInterval(interval);
      if (currentSlide === ($slideCount - 1)) {
        currentSlide = 1;
        $slideContainer.css('margin-left', 0);
        startSlider();
      } else {
        currentSlide += 1;
        $slideContainer.css('margin-left', '-='+$deviceWidth);
        startSlider();
      }
    })
  /* End of Image slide function */
})();

}); /* End of document ready function */
