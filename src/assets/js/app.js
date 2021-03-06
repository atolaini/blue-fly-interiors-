$(document).ready(function() {
  var PIXEL_STEP = 10;
  var LINE_HEIGHT = 40;
  var PAGE_HEIGHT = 800;

  //Wheel normalisation
  function normalizeWheel(/*object*/ event) /*object*/ {
    var sX = 0,
      sY = 0, // spinX, spinY
      pX = 0,
      pY = 0; // pixelX, pixelY

    // Legacy
    if ("detail" in event) {
      sY = event.detail;
    }
    if ("wheelDelta" in event) {
      sY = -event.wheelDelta / 120;
    }
    if ("wheelDeltaY" in event) {
      sY = -event.wheelDeltaY / 120;
    }
    if ("wheelDeltaX" in event) {
      sX = -event.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ("axis" in event && event.axis === event.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ("deltaY" in event) {
      pY = event.deltaY;
    }
    if ("deltaX" in event) {
      pX = event.deltaX;
    }

    if ((pX || pY) && event.deltaMode) {
      if (event.deltaMode == 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }

  var $window = $(window); //Window object
  var scrollTime = 1; //Scroll time
  var scrollDistance = 300;

  $window.on("wheel", function(event) {
    event.preventDefault();
    var results = normalizeWheel(event.originalEvent);
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop + parseInt(results.spinY * scrollDistance);

    TweenMax.to($window, scrollTime, {
      scrollTo: { y: finalScroll, autoKill: false },
      ease: Power1.easeOut,
      autoKill: true,
      overwrite: 5
    });
  });

  //Mobile navigation

  function navHighlight(elem, home, active) {
    var url = location.href.split("/"),
      loc = url[url.length - 1],
      link = document.querySelectorAll(elem);
    for (var i = 0; i < link.length; i++) {
      var path = link[i].href.split("/"),
        page = path[path.length - 1];
      if (page == loc || (page == home && loc == "")) {
        link[i].className += " " + active;
        document.body.className += " " + page.substr(0, page.lastIndexOf("."));
      }
    }
  }
  navHighlight(".nav-bar a", "index.htm", "current");
  navHighlight(".services__nav a", "index.html", "serCurrent");

  var burgerContainer = $(".hamburger-container");
  var navBar = $(".nav-bar");
  var lines = $(".nav-bar__item");
  var line1 = $(".hamburger-container__line--1");
  var line2 = $(".hamburger-container__line--2");
  var line3 = $(".hamburger-container__line--3");
  var links = $("nav-bar a");
  var backToTop = $(".back-to-top-btn");

  burgerContainer.on("mouseenter", function() {
    line1.addClass("line-down");
    line2.addClass("hide-line");
    line3.addClass("line-up");
  });

  burgerContainer.on("mouseleave", function() {
    if (!$(this).hasClass("active-nav")) {
      setTimeout(function() {
        closeLines();
      }, 100);
    } else {
      return false;
    }
  });

  function closeLines() {
    line1.removeClass("line-down");
    line2.removeClass("hide-line");
    line3.removeClass("line-up");
  }

  // function closeNav() {}

  function closeNav() {
    setTimeout(function() {
      navBar.css("transform", "scaleY(0)");
      line1.css("marginRight", "0px");
      line3.css("marginLeft", "0px");
    }, 500);
    $(burgerContainer).removeClass("active-nav");
    lines.removeClass("show-items");
    if ($(".nav-bar__drop-down").hasClass("show-dropDown")) {
      $(".nav-bar__drop-down").removeClass("show-dropDown");
    }
  }

  burgerContainer.on("click", function() {
    if (!$(this).hasClass("active-nav")) {
      $(this).addClass("active-nav");
      setTimeout(function() {
        lines.addClass("show-items");
      }, 500);
      line1.css("marginRight", "20px");
      line3.css("marginLeft", "20px");
      navBar.css("transform", "scaleY(1)");
    } else {
      closeNav();
    }
  });

  //navigation slider
  var dropDown = $(".drop-down");
  // var dropDownUl = $(".nav-bar__drop-down");

  // dropDown.on("click", function() {
  //   dropDownUl.slideToggle();
  // });

  dropDown.on("click", function(e) {
    var dropDownUl = $(".nav-bar__drop-down");
    if (!dropDownUl.hasClass("show-dropDown")) {
      dropDownUl.addClass("show-dropDown");
      dropDownUl.removeClass("hide-dropDown");
      e.preventDefault();
    } else {
      dropDownUl.removeClass("show-dropDown");
      dropDownUl.addClass("hide-dropDown");
      e.preventDefault();
    }
  });

  //Open close modal

  var modalBtn = $(".open-modal");
  var modal = $(".form-modal");
  var closeBtn = $(".form-modal__close");
  var navContact = $(".nav-contact");

  $(modalBtn).on("click", function() {
    modal.addClass("open");
  });

  $(navContact).on("click", function(e) {
    e.preventDefault();
    modal.addClass("open");
    closeNav();
  });

  closeBtn.on("click", function() {
    modal.removeClass("open");
  });

  //BEFORE AFTER SLIDER
  var wrapper = $("#wrapper");
  var topLayer = wrapper.find(".top");
  var handle = wrapper.find(".handle");
  var skew = 0;
  var delta = 0;

  if (wrapper.hasClass("skewed") != -1) {
    skew = 1000;
  }

  wrapper.on("mousemove", function(e) {
    delta = (e.pageX - window.innerWidth / 2) * 0.5;
    handle.css("left", e.pageX + delta + "px");
    topLayer.css("width", e.pageX + skew + delta + "px");
  });

  //Navigation drop down
  var dropDown = $("drop-down");

  //dynamic footer date;
  var copy = $(".footer__copyright");
  var year = new Date().getFullYear();

  copy.append(" " + year);

  //animate svg path
  var scrolling = false;

  $(window).on("scroll", function() {
    var wScroll = $(this).scrollTop();
    scrolling = true;
    if (wScroll > 100) {
      backToTop.css({
        transform: "translateX(0)"
      });
    } else {
      backToTop.css({
        transform: "translateX(50rem)"
      });
    }

    $(document).ready(function() {
      if (!$("body").hasClass("index")) {
        var hero = $(".hero").innerHeight();
        var homeIcon = $(".home-icon");
        var iconPos = homeIcon.offset().top;

        if (iconPos >= hero) {
          homeIcon.css({
            color: "#fcac01"
          });
        } else {
          homeIcon.css({
            color: "white"
          });
        }
      }
    });
  });

  setInterval(function() {
    if (scrolling) {
      scrolling = false;

      var svg = $("svg path");
      var heroSection = $(".services-hero").height() / 100;
      var wScroll = $(window).scrollTop();

      if (wScroll >= heroSection) {
        svg.addClass("animation");
      }
    }
  }, 50);

  if ($(".parallax")[0]) {
    $(window).on("scroll load", function() {
      var parallaxImg = $(".parallax");
      var elmOffset = parallaxImg.offset().top;
      var scrollTop = $(window).scrollTop();
      var distance = elmOffset - scrollTop;

      parallaxImg.css({
        backgroundPosition: "100%" + parseInt(distance / 20) + "px"
      });
    });
  }

  backToTop.on("click", function() {
    backToTop.css({
      transform: "translateX(-50rem)"
    });
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  //dynamically add project slider images
  //var testClass = body.attr("class");

  //if the body has id project do this
  var pageBody = $("body");
  var bodyId = pageBody.attr("id");
  if (bodyId == "project") {
    var testClass = pageBody.attr("class");
    $(".projects-slider-img.slide1").css({
      "background-image": "url(assets/images/" + testClass + "/img1.jpg)"
    });
    $(".projects-slider-img.slide2").css({
      "background-image": "url(assets/images/" + testClass + "/img2.jpg)"
    });
    $(".projects-slider-img.slide3").css({
      "background-image": "url(assets/images/" + testClass + "/img3.jpg)"
    });
    $(".projects-slider-img.slide4").css({
      "background-image": "url(assets/images/" + testClass + "/img4.jpg)"
    });
    $(".projects-slider-img.slide5").css({
      "background-image": "url(assets/images/" + testClass + "/img5.jpg)"
    });
    $(".projects-slider-img.slide6").css({
      "background-image": "url(assets/images/" + testClass + "/img6.jpg)"
    });
  }
}); //End of jquery

//Vanilla javascript

//SVG PATHS
var path = document.querySelectorAll("svg path");
var pathArr = [];

for (var i = 0; i < path.length; i++) {
  pathArr.push(path[i]);
}

pathArr.forEach(function(el) {
  el.style.strokeDasharray = el.getTotalLength();
  el.style.strokeDashoffset = "-" + el.getTotalLength();
});
