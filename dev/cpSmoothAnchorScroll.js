/*global jQuery, history, document, window, location */
/**
 * cpSmoothAnchorScroll.js
 * Copyright 2014 Christian Pletz
 * https://github.com/christian-pletz/cpSmoothAnchorScroll/blob/master/LICENSE
 */
(function ($) {
    "use strict";
    $.fn.cpSmoothAnchorScroll = function (options) {
        var opts = $.extend({}, $.fn.cpSmoothAnchorScroll.defaults, options),
            elements = this,
            handlePushState = function (href) {
                if (history.pushState) {
                    history.pushState(null, null, href);
                } else {
                    window.location.hash = href;
                }
            },
            scroll = function (href, targetElem, clickedElem) {
                if (href.match(/#/) !== null && targetElem.length > 0) {
                    handlePushState(href);
                    $('html,body').stop().animate({
                        scrollTop: $(href).offset().top + opts.offset
                    }, opts.duration, opts.easing, function () {
                        if (clickedElem) {
                            $(document).trigger('scrollingFinished', {
                                clickedEl: clickedElem
                            });
                        }
                    });
                }
            };


        // Scrolling for initial page load
        $(document).on('ready', function () {
            // Scrolling
            elements.each(function () {
                var elem = $(this),
                    href = elem.attr('href');
                elem.attr('data-target', href);
                elem.on('click', function (e) {
                    e.preventDefault();
                    var targetElem = $(href);
                    scroll(href, targetElem, elem);
                });
            }).promise().done(function () {
                var hash = window.location.hash;
                if (window.location.hash !== '') {
                    window.scrollTo(0, 0);
                    $(document).find('a[data-target="' + hash + '"]').trigger('click');
                }
            });
        });
    };

    $.fn.cpSmoothAnchorScroll.defaults = {
        offset: 0, // An integer to offset the position by a number of pixels. Positive or negative values are allowed
        duration: 400, // A string or number determining how long the animation will run.
        easing: 'swing' // A string indicating which easing function to use for the transition.
    };

}(jQuery));
