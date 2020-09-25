//SEARCH BAR PART 1 - CODE TO HANDLE SEARCH/FILTER FUNCTION ON SEARCH BAR 

// INITIATE FILTER FUNCTION ON EVENT KEY DOWN
$("#searchInput").keydown(function () {
    //split the current value of searchInput
    var data = this.value.toUpperCase().split(" ");
    //create a jquery object of the rows
    var jo = $("#fbody").find("li");
    if (this.value == "") {
        jo.show();
        return;
    }
    //hide all the rows
    jo.hide();

    //Recusively filter the jquery object to get results.
    jo.filter(function (i, v) {
        var $t = $(this);
        for (var d = 0; d < data.length; ++d) {
            if ($t.text().toUpperCase().indexOf(data[d]) > -1) {
                return true;
            }
        }
        return false;
    }).show();

}).focus(function () {
    
    this.value = "";
    $(this).css({ "color": "black" });
    $(this).unbind('focus');
}).css({ "color": "#C0C0C0" });


//SEARCH BAR PART 2 - CODE TO HANDLE ENTER/EXIT KEY ON BUBBLE  

$("#searchInput").keyup(function (e) { 
    e.preventDefault();
    var keycode = (e.keyCode ? e.keyCode : e.which);
    $('.popover_search').removeClass('d-none');
    $('.bubble').removeClass('d-none');
    if ($(this).val() == "") {
        close_search();
    }
    if (keycode == "27") {
        close_search();
    }
});

//Exit search bar when click on body
$(document).mouseup(e => {
    if (!$('#searchInput').is(e.target) // if the target of the click isn't the container...
    && !$('.popover_search').is(e.target)) // ... nor a descendant of the container
    {
    close_search();
   }
});

function close_search() {
    $('.popover_search').addClass('d-none');
    $('.bubble').addClass('d-none');
}


