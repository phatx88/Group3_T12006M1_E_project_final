$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show(500);
            $(this).parents('#filter_menu').find('.active').removeClass('active').end().end().addClass('active');
        }
        else {
            //$('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //$(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).slideUp(500);
            $('.filter').filter('.' + value).slideDown(500);
            $(this).parents('#filter_menu').find('.active').removeClass('active').end().end().addClass('active');

        }
    });
 
    //Adding responsiveness on medium screen below 979px
    $(window).resize(function (event) {
        if (window.matchMedia('(max-width: 991px)').matches) {
          $(".filter-button[data-filter=best]").trigger("click"); 
        }
        if (window.matchMedia('(min-width: 992px)').matches) {
            $(".filter-button[data-filter=all]").trigger("click");
        }
    }).resize();

});