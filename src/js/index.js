import burger from './burger.js'

$(".one-time").slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  responsive: [
    {
        breakpoint: 960,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
        }
    },
    {
        breakpoint: 680,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 2
        }
    }
]
});

const commercialLighting = document.querySelector('.commercial_lighting');

window.addEventListener('scroll', function() {
    const blockTop = commercialLighting.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (blockTop <= windowHeight * .7) {
      commercialLighting.classList.add('active_scroll')
  }else{
    commercialLighting.classList.remove('active_scroll')
  }
});
