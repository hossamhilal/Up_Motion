/*global $ */
(function ($) {
    "use strict";

     // OPEN SIDE  MENU 
     $('.menuToggle').on('click', function () {
        $('.menuBtn').toggleClass('open');
        $('.mainMenu').addClass('show');
        $('.navOverlay').addClass('show');
        setTimeout(function () {
            $('body').addClass('stopScroll');
        }, 50);
    });

    // CLOSE SIDE MENU 
    $('.closeMenu , .navOverlay').on('click', function () {
        $('.mainMenu').removeClass('show');
        $('.navOverlay').removeClass('show');
        $('.menuBtn').removeClass('open');
        $('body').removeClass('stopScroll');
    });

    // Scroll Menu
    $('.mainMenu a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1200, 'linear');
        $('.mainMenu').removeClass('show');
        $('.navOverlay').removeClass('show');
        $('.menuBtn').removeClass('open');
        $('.mainMenu li').removeClass('active');
        $(this).parent().addClass('active');
    });

    // Check if Rtl 
    var rtlVal = true;
    $('body').hasClass('en') ? rtlVal = false : rtlVal = true;

    // Header OWL 
    $('.owlHeader').owlCarousel({
        rtl: rtlVal,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: false,
        dots: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 2000,
        smartSpeed: 2000,
        navText: ["<i class='icofont-long-arrow-right'></i>", "<i class='icofont-long-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    // Clients OWL 
    $('.owlClients').owlCarousel({
        rtl: rtlVal,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: false,
        dots: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 2000,
        smartSpeed: 2000,
        navText: ["<i class='icofont-long-arrow-right'></i>", "<i class='icofont-long-arrow-left'></i>"],
        responsive: {
            0: {
                items: 3,
                dotsEach: 3
            },
            600: {
                items: 4,
                dotsEach: 3
            },
            1000: {
                items: 6,
                dotsEach: 3
            }
        }
    });
    
    // Menu Btn Fixed
    // var fixmeTop = $('.about').offset().top;  
    $(window).scroll(function() {   
        var currentScroll = $(window).scrollTop(); 
        currentScroll >= 500 ? $('.menuToggle').addClass('sticky') :  $('.menuToggle').removeClass('sticky');
    });

    // iniat WOW Js
    new WOW().init();

    // Image Animation 
    let elements = document.querySelectorAll('.square');

    var myAnimate = function(el) {
        setTimeout(function () {
            el.style.visibility = 'visible';
        }, 2000);
    };
    
    for (var i = 0; i < elements.length; i++) {
        let el = elements[i].previousElementSibling;
        elements[i].addEventListener('webkitAnimationStart', myAnimate(el), false);
    }

    // Close Video On Modal
    $("#videoModal").on('hidden.bs.modal', function (e) {
        $("#videoModal iframe").attr("src", $("#videoModal iframe").attr("src"));
    });

})(jQuery);

