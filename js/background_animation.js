$(function () {
    /* ---------------------------------------------------
    Code to handle Jumpotron animation
    ----------------------------------------------------- */
    // Changing background image on Jumpotron

    $("#change_iphone_bg").click(function () {
        var imageUrl =
            "img/logo/Apple.jpg";
        $("div#jumpo_heading").children("h1").html("Apple iPhone");
        $("div#jumpo_heading").find("p:first-of-type").html("think different.");
        $(".jumbotron").css("background-image", "url(" + imageUrl + ")");
        $(".jumpo_heading").css("color", "#a0a0a0");
        var el = $('#jumpo_heading'),
            newone = el.clone(true);

        el.before(newone);

        $('.' + el.attr('class') + ":last").remove();
        //code to remove and clone animation in order to reset for every click 
    });

    $("#change_samsung_bg").click(function () {
        var imageUrl =
            "img/logo/samsung-logo.jpg";
        $("div#jumpo_heading").children("h1").html("Samsung");
        $("div#jumpo_heading").find("p:first-of-type").html("Turn On Tommorow");
        $(".jumpotron").children("h1").empty();
        $(".jumbotron").css("background-image", "url(" + imageUrl + ")");
        $(".jumpo_heading").css("color", "#054b93");
        var el = $('#jumpo_heading'),
            newone = el.clone(true);

        el.before(newone);

        $('.' + el.attr('class') + ":last").remove();
    });

    $("#change_nokia_bg").click(function () {
        var imageUrl =
            "img/logo/nokia-logo.jpg";
        $("div#jumpo_heading").children("h1").html("Nokia");
        $("div#jumpo_heading").find("p:first-of-type").html("Connecting People");
        $(".jumbotron").css("background-image", "url(" + imageUrl + ")");
        $(".jumpo_heading").css("color", "#dc7147");
        var el = $('#jumpo_heading'),
            newone = el.clone(true);

        el.before(newone);

        $('.' + el.attr('class') + ":last").remove();
    });
    $("#change_home_bg").click(function () {
        var imageUrl =
            "img/logo/Home-logo.jpg";
        $("div#jumpo_heading").children("h1").html("Cell.Info.com");
        $("div#jumpo_heading").find("p:first-of-type").html("Being updated being smart");
        $(".jumbotron").css("background-image", "url(" + imageUrl + ")");
        $(".jumpo_heading").css("color", "#fff");
        var el = $('#jumpo_heading'),
            newone = el.clone(true);

        el.before(newone);

        $('.' + el.attr('class') + ":last").remove();
    });
    $("#change_features_bg").click(function () {
        var imageUrl =
            "img/logo/features-banner.jpg";
        $("div#jumpo_heading").children("h1").html("Features");
        $("div#jumpo_heading").find("p:first-of-type").html("Best sellers - Newest arrivals -Blowout Sale");
        $(".jumbotron").css("background-image", "url(" + imageUrl + ")");
        $(".jumpo_heading").css("color", "#d8345f");
        var el = $('#jumpo_heading'),
            newone = el.clone(true);

        el.before(newone);

        $('.' + el.attr('class') + ":last").remove();
    });

});