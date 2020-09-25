    /* ---------------------------------------------------
    Customer Page Preloader
    ----------------------------------------------------- */
//Page preloader JS
//Module for preloading page
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});

$(document).ready(function () {


    /* ---------------------------------------------------
    Side bar menu Toggle on/of function
    ----------------------------------------------------- */
    //Javascript to toggle sidebar menu
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    //Close side bar button @ certain window width
    $(window).resize(function (event) {
        if (window.matchMedia('(max-width: 992px)').matches) {
            $('#sidebarCollapse').prop('disabled', true);
            $('#sidebarCollapse').addClass('d-none');
            $('#sidebar, #content').removeClass('active');
        }
        if (window.matchMedia('(min-width: 993px)').matches) {
            $('#sidebarCollapse').prop('disabled', false);
            $('#sidebarCollapse').removeClass('d-none');
        }
    }).resize();



    /* ---------------------------------------------------
    Table filter for tabular information in modal 1 to modal 4
    ----------------------------------------------------- */
    // Searching function for modal

    $('[data-filter="trigger"]').on("change", function () {
        var t = $(this).find("option:selected").val().toLowerCase();

        $('[data-filter="target"]').css("display", "none");
        $("#" + t).css("display", "table-row-group");
        if (t == "all") {
            $('[data-filter="target"]').css("display", "table-row-group")
        }
        $(this).css("display", "block");
    });


    /* ---------------------------------------------------
    OWl carousel option scripts
    ----------------------------------------------------- */
    // Owl carousel custom script 

    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        autoplaySpeed: 5000,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false,
            }
        }
    });

    $(".carousel-1").owlCarousel({
        items: 7,
        rtl: true,
        dots: false,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayHoverPause: false,
        slideTransition: 'linear',
        autoplaySpeed: 5000,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            400: {
                items: 3,
                nav: false
            },
            700: {
                items: 4,
                nav: false
            },
            1000: {
                items: 6,
                nav: false
            },
            1200: {
                items: 8,
                nav: false
            }
        }
    });


    /* ---------------------------------------------------
    Code to link items to owl carousel
    ----------------------------------------------------- */
    // Custom code to Match dropdown menu with carousel item --start
    var carousel = $("#iphone-carousel");
    $("#iphoneSubmenu li:nth-child(1) a, #fbody li:nth-child(1) a").click(function (e) {
        e.preventDefault();
        carousel.trigger("to.owl.carousel", [0, 500, true]);
        //adding glowing animation to selected card and remove others
        $('a').not(this).removeClass('active');
        $(this).addClass('active');
        $('div').not('#iphone-carousel > div.card-1').removeClass('glow');
        $('#iphone-carousel div.card-1').addClass('glow');
    });
    $("#iphoneSubmenu li:nth-child(2) a, #fbody li:nth-child(2) a").click(function (e) {
        e.preventDefault();
        carousel.trigger("to.owl.carousel", [1, 500, true]);
        $('a').not(this).removeClass('active');
        $(this).addClass('active');
        $('div').not('#iphone-carousel > div.card-2').removeClass('glow');
        $('#iphone-carousel div.card-2').addClass('glow');
    });
    $("#iphoneSubmenu li:nth-child(3) a").click(function (e) {
        e.preventDefault();
        carousel.trigger("to.owl.carousel", [2, 500, true]);
        $('a').not(this).removeClass('active');
        $(this).addClass('active');
        $('div').not('#iphone-carousel > div.card-3').removeClass('glow');
        $('#iphone-carousel div.card-3').addClass('glow');
    });
    $("#iphoneSubmenu li:nth-child(4) a, #fbody li:nth-child(3) a").click(function (e) {
        e.preventDefault();
        carousel.trigger("to.owl.carousel", [3, 500, true]);
        $('a').not(this).removeClass('active');
        $(this).addClass('active');
        $('div').not('#iphone-carousel > div.card-4').removeClass('glow');
        $('#iphone-carousel div.card-4').addClass('glow');
    });
    $("#iphoneSubmenu li:nth-child(5) a").click(function (e) {
        e.preventDefault();
        carousel.trigger("to.owl.carousel", [4, 500, true]);
        $('a').not(this).removeClass('active');
        $(this).addClass('active');
        $('div').not('#iphone-carousel > div.card-5').removeClass('glow');
        $('#iphone-carousel div.card-5').addClass('glow');
    });

    var carousel2 = $('#samsung-carousel');
    $("#samsungSubmenu li:nth-child(1) a").click(function (e) {
        e.preventDefault();
        carousel2.trigger("to.owl.carousel", [0, 500, true]);
        $('a').not(this).removeClass('active');
        $(this).addClass('active');
        $('div').not('#samsung-carousel > div.card-1').removeClass('glow');
        $('#samsung-carousel div.card-1').addClass('glow');
    });
    $("#samsungSubmenu li:nth-child(2) a, #fbody li:nth-child(4) a").click(function (e) {
        e.preventDefault();
        carousel2.trigger("to.owl.carousel", [1, 500, true]);
        $('a').not(this).removeClass('active');
        $(this).addClass('active');
        $('div').not('#samsung-carousel > div.card-2').removeClass('glow');
        $('#samsung-carousel div.card-2').addClass('glow');
    });
    $("#samsungSubmenu li:nth-child(3) a, #fbody li:nth-child(5) a").click(function (e) {
        e.preventDefault();
        carousel2.trigger("to.owl.carousel", [2, 500, true]);
        $('a').not(this).removeClass('active');
        $(this).addClass('active');
        $('div').not('#samsung-carousel > div.card-3').removeClass('glow');
        $('#samsung-carousel div.card-3').addClass('glow');
    });
    $("#samsungSubmenu li:nth-child(4) a, #fbody li:nth-child(6) a").click(function (e) {
        e.preventDefault();
        carousel2.trigger("to.owl.carousel", [3, 500, true]);
        $('a').not(this).removeClass('active');
        $(this).addClass('active');
        $('div').not('#samsung-carousel > div.card-4').removeClass('glow');
        $('#samsung-carousel div.card-4').addClass('glow');
    });
    $("#samsungSubmenu li:nth-child(5) a").click(function (e) {
        e.preventDefault();
        carousel2.trigger("to.owl.carousel", [4, 500, true]);
        $('a').not(this).removeClass('active');
        $(this).addClass('active');
        $('div').not('#samsung-carousel > div.card-5').removeClass('glow');
        $('#samsung-carousel div.card-5').addClass('glow');
    });

    var carousel3 = $('#nokia-carousel');
    $("#nokiaSubmenu li:nth-child(1) a").click(function (e) {
        e.preventDefault();
        carousel3.trigger("to.owl.carousel", [0, 500, true]);
        $('a').not(this).removeClass('active');
        $(this).addClass('active');
        $('div').not('#nokia-carousel > div.card-1').removeClass('glow');
        $('#nokia-carousel div.card-1').addClass('glow');
    });
    $("#nokiaSubmenu li:nth-child(2) a, #fbody li:nth-child(7) a").click(function (e) {
        e.preventDefault();
        carousel3.trigger("to.owl.carousel", [1, 500, true]);
        $('a').not(this).removeClass('active');
        $(this).addClass('active');
        $('div').not('#nokia-carousel > div.card-2').removeClass('glow');
        $('#nokia-carousel div.card-2').addClass('glow');
    });
    $("#nokiaSubmenu li:nth-child(3) a, #fbody li:nth-child(8) a").click(function (e) {
        e.preventDefault();
        carousel3.trigger("to.owl.carousel", [2, 500, true]);
        $('a').not(this).removeClass('active');
        $(this).addClass('active');
        $('div').not('#nokia-carousel > div.card-3').removeClass('glow');
        $('#nokia-carousel div.card-3').addClass('glow');
    });
    $("#nokiaSubmenu li:nth-child(4) a, #fbody li:nth-child(9) a").click(function (e) {
        e.preventDefault();
        carousel3.trigger("to.owl.carousel", [3, 500, true]);
        $('a').not(this).removeClass('active');
        $(this).addClass('active');
        $('div').not('#nokia-carousel > div.card-4').removeClass('glow');
        $('#nokia-carousel div.card-4').addClass('glow');
    });
    $("#nokiaSubmenu li:nth-child(5) a").click(function (e) {
        e.preventDefault();
        carousel3.trigger("to.owl.carousel", [4, 500, true]);
        $('a').not(this).removeClass('active');
        $(this).addClass('active');
        $('div').not('#nokia-carousel > div.card-5').removeClass('glow');
        $('#nokia-carousel div.card-5').addClass('glow');
    });

    $("#featuresSubmenu li:nth-child(1) a").click(function (e) {
        e.preventDefault();
        $('a').not(this).removeClass('active');
        $(this).addClass('active');
        $('div').not('.new').removeClass('glow');
        $('.new').addClass('glow');
    });
    $("#featuresSubmenu li:nth-child(2) a").click(function (e) {
        e.preventDefault();
        $('a').not(this).removeClass('active');
        $(this).addClass('active');
        $('div').not('.best').removeClass('glow');
        $('.best').addClass('glow');
    });
    $("#featuresSubmenu li:nth-child(3) a").click(function (e) {
        e.preventDefault();
        $('a').not(this).removeClass('active');
        $(this).addClass('active');
        $('div').not('.sale').removeClass('glow');
        $('.sale').addClass('glow');
    });
    $('button[data-filter=new]').click(function (e) {
        e.preventDefault();
        $('div').not('.new').removeClass('glow');
        $('.new').addClass('glow');
    });
    $('button[data-filter=best]').click(function (e) {
        e.preventDefault();
        $('div').not('.best').removeClass('glow');
        $('.best').addClass('glow');
    });
    $('button[data-filter=sale]').click(function (e) {
        e.preventDefault();
        $('div').not('.sale').removeClass('glow');
        $('.sale').addClass('glow')
    });
    $('button[data-filter=all]').click(function (e) {
        e.preventDefault();
        $('div').removeClass('glow');
    });


    // Custom code to Match dropdown menu with carousel item --end

    
    /* ---------------------------------------------------
    popover/tooltip/pointer cursor
    ----------------------------------------------------- */
    // popover for download button 

    $("[data-toggle=popover]").popover({
        container: 'body',
        placement: 'bottom',
        html: true,
        trigger: 'hover',
        title: 'More Features',
        content: 'available in Word Docs'
    });

    //tooltip on Contact Page
    $('[data-toggle="tooltip"]').tooltip()

    // Changeing pointer cursor 
    $('.card').mouseover(function () {
        $(this).css('cursor', 'grab');
        $('.card-img-top').css('cursor', 'grab');
    });

    $('.card').mousedown(function () {
        $(this).css('cursor', 'grabbing');
        $('.card-img-top').css('cursor', 'grabbing');
    });


    /* ---------------------------------------------------
    Back to top Button
    ----------------------------------------------------- */
    // Click event for back to top button --start
    $('.back-to-top').click(function (e) {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 2000);
    });
    // Click event for back to top button -- end


    // HIDING BACK TO TOP, CALL TO CLICK BUTTONS ON SCROLL --start

    toggleBacktoTop(); //Hide back to top button when scroll on Top
    //Create event to toggle back to top button when scroll
    $(window).scroll(function (event) {
        toggleBacktoTop(); //re-activate button when not at top
    });


    /* ---------------------------------------------------
    Call to Click button
    ----------------------------------------------------- */
    // toggleCalltoClick();
    $(window).scroll(function (event) {
        // toggleCalltoClick();
        if (($(this).scrollTop() > $('#iphone').offset().top) && ($(this).scrollTop() < $('#footer').offset().top)) {
            $('.CTA_chat , .CTA_chat > a').fadeIn("slow");
        }
        else {
            $('.CTA_chat , .CTA_chat > a').fadeOut("slow");
        }

    });

    // Dismiss CalltoClick();
    $('#content div.CTA_chat a:nth-child(1)').click(function (e) {
        e.preventDefault();
        $('.CTA_chat').animate({
            right: '-100%',
            opacity: '0'
        });
    });


    /* ---------------------------------------------------
    Smooth scrolling 
    ----------------------------------------------------- */
    //smooth scroll for a in the sidepanel session
    $('.wrapper nav ul#category li ul li a, .wrapper nav .popover_search ul li a').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        if (target) {
            var targetObj = $(target);

            $('html, body').stop().animate({
                'scrollTop': targetObj.offset().top
            }, 1000, 'swing', function () {
                window.location.hash = target;
            })
        }
    });


    // HIDING BACK TO TOP, CALL TO CLICK BUTTONS ON SCROLL --end

    //  Add smooth scrolling to all links -- start
    // jQuery($ => {
    //     // The speed of the scroll in milliseconds
    //     const speed = 1000;

    //     $('a[href*="#"]')
    //       .filter((i, a) => a.getAttribute('href').startsWith('#') || a.href.startsWith(`${location.href}#`))
    //       .unbind('click.smoothScroll')
    //       .bind('click.smoothScroll', event => {
    //         const targetId = event.currentTarget.getAttribute('href').split('#')[1];
    //         const targetElement = document.getElementById(targetId);

    //         if (targetElement) {
    //           event.preventDefault();
    //           $('html, body').animate({ scrollTop: $(targetElement).offset().top }, speed);
    //         }
    //       });
    //   });
    // Add smooth scrolling to all links -- end



    /* ---------------------------------------------------
    Timer inside modal 1 to modal 4
    ----------------------------------------------------- */

    // Setting CountDown Timmers for modal table -- Start
    // Set the date we're counting down to
    var countDownDate = new Date("nov 5, 2020 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        // document.getElementByClass("timer").innerHTML = days + "d " + hours + "h "
        //     + minutes + "m " + seconds + "s ";
        $('.timer').html(days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ');

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            // document.getElementByClass("timer").innerHTML = "EXPIRED";
            $('.timer').html("EXPIRED");

        }
    }, 1000);
    // Setting CountDown Timmers for modal table -- End

});



    /* ---------------------------------------------------
    XMLHTTP REQUEST FOR CONTACT US PAGE
    ----------------------------------------------------- */

//Loading AJAXinfo.text in contact page 

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("addDoc").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}

function data() {
    document.getElementById("ketqua").innerHTML = "<i class='far fa-check-circle'></i> We've received your report.";
}


    /* ---------------------------------------------------
    Back to top/ Call to Click function
    ----------------------------------------------------- */

//hiding back-to-top button when on Top
function toggleBacktoTop() {
    if ($(window).scrollTop() == 0) {
        $('.back-to-top').hide("slow");
    }
    else {
        $('.back-to-top').show("slow");
    }
}

function toggleCalltoClick() {
    if ($(window).scrollTop() == 0) {
        $('.CTA_chat , .CTA_chat > a').fadeOut("slow");
    }
    else {
        $('.CTA_chat , .CTA_chat > a').fadeIn("slow");
    }
}


    /* ---------------------------------------------------
    Hiding Navbar when scrolling down
    ----------------------------------------------------- */

// hiding navbar when scroll 

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) 
    {
        document.getElementById("navbar").style.top = "0";
    }
    else
    {
        document.getElementById("navbar").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
}


    /* ---------------------------------------------------
    Video auto play - function
    ----------------------------------------------------- */
// Contact Us Video function 
function deferVideo() {

    //defer html5 video loading
    $("video source").each(function () {
        var sourceFile = $(this).attr("data-src");
        $(this).attr("src", sourceFile);
        var video = this.parentElement;
        video.load();
        // uncomment if video is not autoplay
        //video.play();
    });

}
window.onload = deferVideo;

