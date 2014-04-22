/**
 * cpSmoothAnchorScroll.js
 * Version 0.1
 * Copyright 2014 Christian Pletz
 * https://github.com/christian-pletz/cpSmoothAnchorScroll/blob/master/LICENSE
 */
(function(a){a.fn.cpSmoothAnchorScroll=function(d){var e=a.extend({},a.fn.cpSmoothAnchorScroll.defaults,d),f=this,c=function(g){if(history.pushState){history.pushState(null,null,g)}else{window.location.hash=g}},b=function(g,i,h){if(g.match(/#/)!==null&&i.length>0){c(g);a("html,body").stop().animate({scrollTop:a(g).offset().top+e.offset},e.duration,e.easing,function(){if(h){a(document).trigger("scrollingFinished",{clickedEl:h})}})}};a(document).on("ready",function(){f.each(function(){var h=a(this),g=h.attr("href");h.attr("data-target",g);h.on("click",function(j){j.preventDefault();var i=a(g);b(g,i,h)})}).promise().done(function(){var g=window.location.hash;if(window.location.hash!==""){window.scrollTo(0,0);a(document).find('a[data-target="'+g+'"]').trigger("click")}})})};a.fn.cpSmoothAnchorScroll.defaults={offset:0,duration:400,easing:"swing"}}(jQuery));
