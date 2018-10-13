var path = document.querySelectorAll("svg path");
var el = document.querySelector(".services-hero");
var pathArr = [];
var length;

console.log(path);
function svgPaths() {
  for (var i = 0; i < path.length; i++) {
    pathArr.push(path[i]);
  }

  pathArr.forEach(function(el) {
    lengths = el.getTotalLength();
    console.log(lengths);
    for (var x = 0; x < path.length; x++) {
      path[x].style.strokeDasharray = lengths;
      path[x].style.strokeDashoffset = "-" + length;
    }
  });
}

window.addEventListener("scroll", function() {
  var height = document.querySelector(".services-hero").offsetHeight;
  var scroll = this.scrollY;
  if (scroll == height) {
    pathArr.forEach(function(el1) {
      el1.classList.add("animation");
    });
  }
});

svgPaths();

//loop through array and get lengths
