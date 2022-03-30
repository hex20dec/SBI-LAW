/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict


    if(location.hash.includes('#thank-you')){
        $("#ty-modal").modal();
        if(location.hash.includes('instructor')){
            // instructor sign up
            $("#instructor-signup-ty-body").attr("hidden", false);
        }else{
            // student sign up
            if(location.hash.includes('ggl')){
                gtag('event', 'conversion', {'send_to': 'AW-1002304511/_Qj0CMyjs4cCEP_n990D'});
            }
            $("#student-signup-ty-body").attr("hidden", false);
        }
        location.hash = '';
    }


    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    $("#menu-btn").on('click', function(){
        // the reason why this is reversed is because it checks the value really fast, before it changes.
        if($(this).attr('aria-expanded')==="false"){
            $("#mainNav").addClass('expanded');
        }else{
            $("#mainNav").removeClass('expanded');
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 150) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };



    function set100vhVar() {
        // If less than most tablets, set CSS var to window height.
        let value = "100vh"
        if (window.innerWidth <= 1024) {
            value = `${window.innerHeight}px`
        }
        document.documentElement.style.setProperty("--real100vh", value)
    }
    set100vhVar();
    // Collapse now if page is not at top
    // navbarCollapse();
    // Collapse the navbar when page is scrolled
    // $(window).scroll(navbarCollapse);

    // Start of Tawk.to Script
    setTimeout(function(){
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/608a18325eb20e09cf379c19/1f4dmt13h';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
    }, 1000);
    
    // End of Tawk.to Script



})(jQuery); // End of use strict
