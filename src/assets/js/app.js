$(document).ready(function() {
  //Mobile navigation

  var burgerContainer = $(".hamburger-container");
  var navBar = $(".nav-bar");
  var lines = $(".nav-bar__item");
  var line1 = $(".hamburger-container__line--1");
  var line2 = $(".hamburger-container__line--2");
  var line3 = $(".hamburger-container__line--3");
  var links = $("nav-bar a");

  burgerContainer.on("mouseenter", function() {
    line1.addClass("line-down");
    line2.addClass("hide-line");
    line3.addClass("line-up");
  });

  burgerContainer.on("mouseleave", function() {
    if (!$(this).hasClass("active-nav")) {
      setTimeout(function() {
        closeLines();
      }, 200);
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
      setTimeout(function() {
        navBar.css("transform", "scaleY(0)");
        line1.css("marginRight", "0px");
        line3.css("marginLeft", "0px");
      }, 500);
      $(this).removeClass("active-nav");
      lines.removeClass("show-items");
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
    scrolling = true;
  });

  setInterval(function() {
    if (scrolling) {
      scrolling = false;

      var svg = $("svg path");
      var heroSection = $(".services-hero").height() / 2;
      var wScroll = $(window).scrollTop();

      if (wScroll >= heroSection) {
        svg.addClass("animation");
      }
    }
  }, 50);
});

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
