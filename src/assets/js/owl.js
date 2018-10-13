$(document).ready(function() {
  //Home pager slider
  $(".slider").owlCarousel({
    loop: true,
    center: true,
    autoplay: true,
    margin: 10,
    items: 2,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    touchDrag: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });

  //Home pager slider
  $(".services-content__slider").owlCarousel({
    loop: true,
    center: true,
    autoplay: true,
    margin: 10,
    items: 3,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    touchDrag: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });
});
