$(document).ready(() => {
let $deviceWidth = $(window).width();


/* Nav bar function */
  $('.burger').on('click', () => {
    $('.nav-menu').slideToggle('slow');
  });


  /* image slider */

  (function slideShow() {
    /* configurations */
    let animationSpeed = 1000;
    let pause = 5000;
    var currentSlide = 1;

    /* cache DOM */
    let $slider = $('#slider');
    let $slideContainer = $slider.find('.slides');
    let $slides = $slideContainer.find('.slide');
    let $slideCount = $slideContainer.children().length;
    let $slideWidthPc = 100.0 / $slideCount;
    let interval;

    function startSlider() {
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
    startSlider();

    /* Set-up for Arrows */
    let $arrowContainer = $('.arrow-container');
    let $leftArrow = $arrowContainer.find('.arrow-left');
    let $rightArrow = $arrowContainer.find('.arrow-right');

    /* Left Arrow */
    $leftArrow.on('click', function() {
      clearInterval(interval);
      if (currentSlide === 1) {
        currentSlide = $slideCount;
        let lastSlideWidth = -(($slideCount - 1) * $deviceWidth);
        $slideContainer.css({'margin-left' :  lastSlideWidth});
        let secondToLastSlideWidth = -(($slideCount - 2) * $deviceWidth);
        currentSlide = $slideCount - 1;
        $slideContainer.animate({'margin-left' : secondToLastSlideWidth}, animationSpeed);
        startSlider();
      } else {
        currentSlide -= 1;
        $slideContainer.animate({'margin-left' : '+='+$deviceWidth}, animationSpeed);
        startSlider();
      };
    });

    /* Right Arrow */
    $rightArrow.on('click', function() {
      clearInterval(interval);
      if (currentSlide === $slideCount) {
        currentSlide = 1;
        $slideContainer.css('margin-left', 0);
        currentSlide ++;
        $slideContainer.animate({'margin-left' : '-='+$deviceWidth}, animationSpeed);
        startSlider();
      } else {
        currentSlide += 1;
        $slideContainer.animate({'margin-left' : '-='+$deviceWidth}, animationSpeed);
        startSlider();
      }
    })
  /* End of Image slide function */
})();

}); /* End of document ready function */
