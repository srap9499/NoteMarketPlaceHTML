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
            $('.home nav').addClass("white-nav-top");

            // Show dark logo
            $('.home .navbar-brand img').attr("src", "images/pre-login/logo.png");
        } else {

            //hide white nav
            $('.home nav').removeClass("white-nav-top");

            // Show logo
            $('.home .navbar-brand img').attr("src", "images/pre-login/top-logo.png");
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

/* ====================================================
                Accodion
==================================================== */
$(document).ready(function() {
    
    for ( let i = 1; i <= 7; i++ ) {
        $(".showdata" + i).click(function() {
            $(".myhead" + i).hide();
            $(".mybody" + i).show();
        });
        $(".hidedata" + i).click(function() {
            $(".myhead" + i).show();
            $(".mybody" + i).hide();
        });
    }
});



















