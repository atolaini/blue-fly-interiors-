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

  //services pager slider
  $(".services-content__slider").owlCarousel({
    loop: true,
    center: true,
    autoplay: true,
    margin: 10,
    items: 2,
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

  //Home pager slider
  $(".projects-main-content__slider").owlCarousel({
    loop: true,
    animateOut: "fadeOut",
    animateIn: "flipInX",
    center: true,
    autoplay: true,
    margin: 10,
    items: 1,
    autoheight: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    touchDrag: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});
