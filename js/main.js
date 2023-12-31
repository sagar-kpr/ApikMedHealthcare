(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
			576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);

// function toggleWidget() {
//   var widgetContent = document.getElementById("widget-content");
//   widgetContent.style.display =
//     widgetContent.style.display === "none" || widgetContent.style.display === ""
//       ? "block"
//       : "none";
// }

 function toggleWidget() {
   var widgetContent = document.getElementById("widget-content");
   if (window.getComputedStyle(widgetContent).display === "none") {
     widgetContent.style.display = "block";
   } else {
     widgetContent.style.display = "none";
   }
 }


function openWhatsApp() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//   console.log(isMobile)
  var whatsappURL = isMobile
    ? "https://wa.me/918968897662?text=Hi I am enquiring for your services "
    : "https://web.whatsapp.com/send?phone=8968897662&text=Hi I am enquiring for your services";
  window.open(whatsappURL);
}

var widget_content = document.getElementById("widget-content");

document.addEventListener("DOMContentLoaded", function () {
  widget_content.classList.add("loaded");
});
