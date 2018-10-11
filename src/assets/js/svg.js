//get svg's paths and lengths
var path = document.querySelectorAll("svg path");
var pathArr = [];
var lengthsArr = [];
var animation = document.querySelectorAll(".animation");
var lengths;
var svg = document.querySelectorAll("svg");

for (var i = 0; i < path.length; i++) {
  pathArr.push(path[i]);
}
pathArr.forEach(function(el) {
  lengths = el.getTotalLength();
  for (var x = 0; x < path.length; x++) {
    path[x].style.strokeDasharray = lengths;
    path[x].style.strokeDashoffset = "-" + lengths;
  }
});

$(document).ready(function() {
  var hero = $(".services-hero").outerHeight() / 2;
  var path = $("svg path");

  $(window).on("scroll", function() {
    console.log(321);
    var wScroll = $(this).scrollTop();
    console.log(wScroll);

    if (hero == wScroll) {
      path.addClass("animation");
    }
  });
});

// document.addEventListener("DOMContentLoaded", function() {
//   setTimeout(function() {
//     for (var i = 0; i < path.length; i++) {
//       path[i].classList.add("animation");
//     }
//   }, 100);
// });
