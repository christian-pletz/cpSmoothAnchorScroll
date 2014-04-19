/*global jQuery, history, document, window, location */
/**
 * cpSmoothAnchorScroll.js
 * Version 0.1
 * Copyright 2014 Christian Pletz
 * https://github.com/christian-pletz/cpSmoothAnchorScroll/blob/master/LICENSE
 */
(function ($) {
    "use strict";
    $.fn.cpSmoothAnchorScroll = function (options) {
        var opts = $.extend({}, $.fn.cpSmoothAnchorScroll.defaults, options),
            handlePushState = function (href) {
                if (history.pushState) {
                    history.pushState(null, null, href);
                } else {
                    window.location.hash = href;
                }
            },
            scroll = function (href, targetElem, clickedElem) {
                if (href.match(/#/) !== null && targetElem.length > 0) {
                    $('html,body').stop().animate({
                        scrollTop: $(href).offset().top + opts.offset
                    }, opts.duration, opts.easing, function () {
                        handlePushState(href);
                        $(document).trigger('scrollingFinished', {
                            clickedEl: clickedElem
                        });
                    });
                }
            };
        return this.each(function () {
            var elem = $(this);
            elem.on('click', function (e) {
                e.preventDefault();
                var href = $(e.target).attr('href'),
                    targetElem = $(href);
                scroll(href, targetElem, elem);
            });
        });
    };

    $.fn.cpSmoothAnchorScroll.defaults = {
        offset: 0, // An integer to offset the position by a number of pixels. Positive or negative values are allowed
        duration: 400, // A string or number determining how long the animation will run.
        easing: 'swing' // A string indicating which easing function to use for the transition.
    };
}(jQuery));
