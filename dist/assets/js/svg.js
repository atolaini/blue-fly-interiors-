for(var lengths,path=document.querySelectorAll("svg path"),pathArr=[],lengthsArr=[],animation=document.querySelectorAll(".animation"),svg=document.querySelectorAll("svg"),i=0;i<path.length;i++)pathArr.push(path[i]);pathArr.forEach(function(t){lengths=t.getTotalLength();for(var e=0;e<path.length;e++)path[e].style.strokeDasharray=lengths,path[e].style.strokeDashoffset="-"+lengths}),$(document).ready(function(){var e=$(".services-hero").outerHeight()/2,o=$("svg path");$(window).on("scroll",function(){console.log(321);var t=$(this).scrollTop();console.log(t),e==t&&o.addClass("animation")})});