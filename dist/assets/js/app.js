$(document).ready(function(){var a=$(".hamburger-container"),o=$(".nav-bar"),s=$(".nav-bar__item"),n=$(".hamburger-container__line--1"),e=$(".hamburger-container__line--2"),r=$(".hamburger-container__line--3"),t=($("nav-bar a"),$(".back-to-top-btn"));a.on("mouseenter",function(){n.addClass("line-down"),e.addClass("hide-line"),r.addClass("line-up")}),a.on("mouseleave",function(){if($(this).hasClass("active-nav"))return!1;setTimeout(function(){n.removeClass("line-down"),e.removeClass("hide-line"),r.removeClass("line-up")},200)}),a.on("click",function(){$(this).hasClass("active-nav")?(setTimeout(function(){o.css("transform","scaleY(0)"),n.css("marginRight","0px"),r.css("marginLeft","0px")},500),$(this).removeClass("active-nav"),s.removeClass("show-items")):($(this).addClass("active-nav"),setTimeout(function(){s.addClass("show-items")},500),n.css("marginRight","20px"),r.css("marginLeft","20px"),o.css("transform","scaleY(1)"))}),$(".drop-down").on("click",function(a){var o=$(".nav-bar__drop-down");o.hasClass("show-dropDown")?(o.removeClass("show-dropDown"),o.addClass("hide-dropDown")):(o.addClass("show-dropDown"),o.removeClass("hide-dropDown")),a.preventDefault()});var i=$(".open-modal"),l=$(".form-modal"),c=$(".form-modal__close");i.on("click",function(){l.addClass("open")}),c.on("click",function(){l.removeClass("open")});var d=$("#wrapper"),h=d.find(".top"),p=d.find(".handle"),m=0,f=0;-1!=d.hasClass("skewed")&&(m=1e3),d.on("mousemove",function(a){f=.5*(a.pageX-window.innerWidth/2),p.css("left",a.pageX+f+"px"),h.css("width",a.pageX+m+f+"px")});$("drop-down");var u=$(".footer__copyright"),v=(new Date).getFullYear();u.append(" "+v);var w=!1;$(window).on("scroll",function(){var a=$(this).scrollTop();w=!0,100<a?t.css({transform:"translateX(0)"}):t.css({transform:"translateX(50rem)"})}),setInterval(function(){if(w){w=!1;var a=$("svg path");$(".services-hero").height()/2<=$(window).scrollTop()&&a.addClass("animation")}},50),$(window).on("scroll load",function(){var a=$(".parallax"),o=a.offset().top-$(window).scrollTop();a.css({backgroundPosition:"100%"+parseInt(o/15)+"px"})}),t.on("click",function(){return t.css({transform:"translateX(-50rem)"}),$("html, body").animate({scrollTop:0},1e3),!1})});for(var path=document.querySelectorAll("svg path"),pathArr=[],i=0;i<path.length;i++)pathArr.push(path[i]);pathArr.forEach(function(a){a.style.strokeDasharray=a.getTotalLength(),a.style.strokeDashoffset="-"+a.getTotalLength()});