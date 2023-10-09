/*------------------------------------------------------------------
* Project:        Gautama
* Author:         CN-InfoTech
* URL:            hthttps://themeforest.net/user/cn-infotech
* Created:        01/14/2020
-------------------------------------------------------------------*/


(function($) {


    "use strict";

    /*======== Doucument Ready Function =========*/
    jQuery(document).ready(function() {
        //CACHE JQUERY OBJECTS
        $("#status").fadeOut();
        $("#preloader").delay(200).fadeOut("slow");
        $("body").delay(200).css({ "overflow": "visible" });


        /* Init Wow Js */
        new WOW().init();

    });


    // Mouse-enter dropdown
    $('#navbar li').on('mouseenter', function() {
        $(this).find('ul').first().stop(true, true)
            .delay(350)
            .slideDown(500, 'easeInOutQuad');
    });
    // Mouse-leave dropdown
    $('#navbar li').on('mouseleave', function() {
        $(this).find('ul').first().stop(true, true)
            .delay(100)
            .slideUp(150, 'easeInOutQuad');
    });

    $(window).scroll(() => {
        if ($(window).scrollTop() > 10) {
            $('.navigation').addClass('navbar-sticky');
        } else {
            $('.navigation').removeClass('navbar-sticky');
        }
    });

    /* ------------------------------------------------------------------------ */
    /* BACK TO TOP
/* ------------------------------------------------------------------------ */

    $(document).on('click', '#back-to-top, .back-to-top', () => {
        $('html, body').animate({ scrollTop: 0 }, '500');
        return false;
    });
    $(window).on('scroll', () => {
        if ($(window).scrollTop() > 500) {
            $('#back-to-top').fadeIn(200);
        } else {
            $('#back-to-top').fadeOut(200);
        }
    });

    jQuery(document).ready(() => {
        jQuery('.js-video-button').modalVideo({ channel: 'vimeo' });
    });


    $('.review-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.review-slider1').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
    });

    $('.room-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }]
    });



    $('.award-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        responsive: [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.team-slider1').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.gallery-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    $('.slider-store').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-thumbs',
    });

    $('.slider-thumbs').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-store',
        dots: false,
        centerMode: true,
        arrows: true,
        focusOnSelect: true,
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        autoplay: true,
        asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        autoplay: true,
        focusOnSelect: true,
    });



    // Date Picker
    $('#datepicker, #check-datepicker').datepicker();

    // selectPicker
    $('.selectpicker').selectpicker();

    // Nice Select JS
    $('.niceSelect').niceSelect();

    // accordian

    if ($('.accrodion-grp').length) {
        const accrodionGrp = $('.accrodion-grp');
        accrodionGrp.each(function() {
            const accrodionName = $(this).data('grp-name');
            const Self = $(this);
            const accordion = Self.find('.accrodion');
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            accordion.each(function() {
                $(this).find('.accrodion-title').on('click', function() {
                    if ($(this).parent().hasClass('active') === false) {
                        $(`.accrodion-grp.${accrodionName}`).find('.accrodion').removeClass('active');
                        $(`.accrodion-grp.${accrodionName}`).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().addClass('active');
                        $(this).parent().find('.accrodion-content').slideDown();
                    }
                });
            });
        });
    }

    $("#contactform").validate({
        submitHandler: function() {
            var formData = new FormData();
            formData.append('file', $('#attachment')[0].files[0]);

            $.ajax({
                url: 'mail.php',
                type: 'POST',
                data: {
                    first_name: $('input[name="first_name"]').val(),
                    last_name: $('input[name="last_name"]').val(),
                    email: $('input[name="email"]').val(),
                    phone: $('input[name="phone"]').val(),
                    comments: $('textarea[name="comments"]').val(),
                    formData: formData,
                },
                success: function(result) {
                    $('#contactform-error-msg').html(result);
                    $("#contactform")[0].reset();
                }
            });

        }
    });

    /*= ======= Isotope Filter Script ========= */

    const mt_personal = window.mt_personal || {};
    const $win = $(window);

    mt_personal.Isotope = function() {
        // 4 column layout
        const isotopeContainer = $('.isotopeContainer');
        if (!isotopeContainer.length || !jQuery().isotope) return;
        $win.on('load', () => {
            isotopeContainer.isotope({
                itemSelector: '.isotopeSelector',
            });
            $('.mt_filter').on('click', 'a', function(e) {
                $('.mt_filter ul li').find('.active').removeClass('active');
                $(this).addClass('active');
                const filterValue = $(this).attr('data-filter');
                isotopeContainer.isotope({ filter: filterValue });
                e.preventDefault();
            });
        });
    };

    mt_personal.Isotope();


    // Range sliders activation
    $('.range-slider-ui').each(function() {
        const minRangeValue = $(this).attr('data-min');
        const maxRangeValue = $(this).attr('data-max');
        const minName = $(this).attr('data-min-name');
        const maxName = $(this).attr('data-max-name');
        const unit = $(this).attr('data-unit');

        $(this).slider({
            range: true,
            min: minRangeValue,
            max: maxRangeValue,
            values: [minRangeValue, maxRangeValue],
            slide(event, ui) {
                event = event;
                const currentMin = parseInt(ui.values[0], 10);
                const currentMax = parseInt(ui.values[1], 10);
                $(this).children('.min-value').text(`${currentMin} ${unit}`);
                $(this).children('.max-value').text(`${currentMax} ${unit}`);
                $(this).children('.current-min').val(currentMin);
                $(this).children('.current-max').val(currentMax);
            },
        });
    });

    $('#counter-block').ready(() => {
        $('.room').animationCounter({
            start: 0,
            end: 7,
            step: 1,
            delay: 1000 // Increase the delay value for slower speed
        });
        $('.staff').animationCounter({
            start: 0,
            end: 600,
            step: 2,
            delay: 60, // Increase the delay value for slower speed
        });
        $('.restaurant').animationCounter({
            start: 0,
            end: 100,
            step: 2,
            delay: 300, // Increase the delay value for slower speed
        });
        $('.award').animationCounter({
            start: 0,
            end: 52,
            step: 1,
            delay: 300, // Increase the delay value for slower speed
        });
    });

    $(document).ready(() => {
        loopcounter('coming-counter');
    });


    window.FPConfig = {
        delay: 0,
        ignoreKeywords: [],
        maxRPS: 3,
        hoverDelay: 50,
    };


    niceSelect_destroy();

}(jQuery));

/**
 * Make height equal to screen
 */

jQuery(window).on('resize load', () => {
    resize_eb_slider();
}).resize();

/**
 * Resize slider
 */

function resize_eb_slider() {
    let bodyheight = jQuery(this).height();

    if (jQuery(window).width() > 1400) {
        bodyheight *= 0.90;
        jQuery('.slider').css('height', `${bodyheight}px`);
    }
}


function niceSelect_destroy() {
    if (jQuery(window).width() < 768) {
        $('.niceSelect').niceSelect('destroy');
    } else {
        $('.niceSelect').niceSelect('udpate');
    }
}


jQuery(document).on('click', '.dark-mode a', function() {
    jQuery('body').addClass('night-mode');
});
jQuery(document).on('click', '.light-mode a', function() {
    jQuery('body').removeClass('night-mode');
});


// preloader

// Delay the preloader for 2 seconds before hiding it
setTimeout(function() {
    document.querySelector('.preloader').style.display = 'none';
}, 500);

// preloader




// form auto fill

// const form = document.getElementById('contactform');
//     const submitBtn = document.getElementById('submit');

//     function validateForm() {
//         const firstName = form.first_name.value.trim();
//         const lastName = form.last_name.value.trim();
//         const email = form.email.value.trim();
//         const phone = form.phone.value.trim();
//         const message = form.comments.value.trim();
//         const attachment = form.attachment.value.trim();

//         if (!firstName || !lastName || !email || !phone || !message || !attachment) {
//             alert('Please fill in all required fields');
//             return false;
//         }

//         return true;
//     }

//     submitBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             form.submit();
//         }
//     });\


// text animation

// Add a scroll event listener to the window
window.addEventListener("scroll", function() {
    // Get all the <h1> and <h2> elements on the page
    var headings = document.querySelectorAll("h1, h2");

    // Loop through each heading element
    headings.forEach(function(heading) {
        // Calculate the distance between the top of the document and the current scroll position
        var scrollDistance = window.pageYOffset || document.documentElement.scrollTop;

        // Calculate the height of the viewport
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        // Calculate the threshold for showing the heading (adjust as needed)
        var threshold = viewportHeight / 2;

        // Check if the scroll distance exceeds the threshold
        if (scrollDistance > threshold) {
            // Add the "is-visible" class to the heading
            heading.classList.add("is-visible");
        } else {
            // Remove the "is-visible" class from the heading
            heading.classList.remove("is-visible");
        }
    });
});


// zoomout animation