/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
    $.stellar();

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.menu-top',
        offset: 51
    })

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    $('.menu').click(function() {
	$('.showmenu').toggleClass('openMenu closedMenu');
	$('.menu').toggleClass('toggleMenu');
    });
    $('.inmenu li').click(function() {
        $('.showmenu').toggleClass('openMenu closedMenu');
        $('.menu').toggleClass('toggleMenu');
    });
    $(function(){
      $('inmenu li a').each(function() {
        if ($(this).prop('href') == window.location.href) {
          $(this).addClass('current');
        }
      });
    });
    $(".modal-fullscreen").on('show.bs.modal', function () {
      setTimeout( function() {
        $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
      }, 0);
    });
    $(document).ready(function(){
        $('.modal').each(function(){
                var src = $(this).find('iframe').attr('src');

            $(this).on('click', function(){

                $(this).find('iframe').attr('src', '');
                $(this).find('iframe').attr('src', src);

            });
        });
    });
    

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
