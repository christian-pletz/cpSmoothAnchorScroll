/**
 * cpSmoothAnchorScroll.js
 * Version 0.1
 * Copyright 2014 Christian Pletz
 * https://github.com/christian-pletz/cpSmoothAnchorScroll/blob/master/LICENSE
 */
(function(a){a.fn.cpSmoothAnchorScroll=function(d){var e=a.extend({},a.fn.cpSmoothAnchorScroll.defaults,d),c=function(f){if(history.pushState){history.pushState(null,null,f)}else{window.location.hash=f}},b=function(f,h,g){if(f.match(/#/)!==null&&h.length>0){c(f);a("html,body").stop().animate({scrollTop:a(f).offset().top+e.offset},e.duration,e.easing,function(){a(document).trigger("scrollingFinished",{clickedEl:g})})}};return this.each(function(){var f=a(this);f.on("click",function(i){i.preventDefault();var g=a(i.target).attr("href"),h=a(g);b(g,h,f)})})};a.fn.cpSmoothAnchorScroll.defaults={offset:0,duration:400,easing:"swing"}}(jQuery));
