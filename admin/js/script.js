/* ====================================================
                Navigation
==================================================== */

/* Show & Hide White Navigation */

$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            //show white nav
            $('nav').addClass("white-nav-top");

            // Show dark logo
            $('.navbar-brand img').attr("src", "images/pre-login/logo.png");
        } else {

            //hide white nav
            $('nav').removeClass("white-nav-top");

            // Show logo
            $('.navbar-brand img').attr("src", "images/pre-login/top-logo.png");
        }
    }

});

// Smoothing Scrolling
$(function () {

    $('a.smooth-scroll').click(function (event) {

        event.preventDefault();

        // get section id like #about, #services, #work, #team and etc.
        var section_id = $(this).attr('href');

        $('html,body').animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, 'easeInOutExpo');

    });

});





















