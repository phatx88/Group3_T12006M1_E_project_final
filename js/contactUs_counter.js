$(function () {
    // $('.counter').each(function() {
    //     var $this = $(this),
    //         countTo = $this.attr('data-count');
        
    //     $({ countNum: $this.text()}).animate({
    //       countNum: countTo
    //     },
      
    //     {
      
    //       duration: 8000,
    //       easing:'linear',
    //       step: function() {
    //         $this.text(Math.floor(this.countNum));
    //       },
    //       complete: function() {
    //         $this.text(this.countNum);
    //         //alert('finished');
    //       }
      
    //     });  
        
        
      
    //   });

    $(window).scroll(countAnimation);
	var viewed = false;

	function isScrolledIntoView(elem) {
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();

	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	function countAnimation() {
	  if (isScrolledIntoView($(".counter-wrapper")) && !viewed) {
	      viewed = true;
	      $('.counter-wrapper .counter').each(function () {
	      $(this).prop('data-count',0).animate({
	          Counter: $(this).text()
	      }, {
	          duration: 10000,
	          easing: 'swing',
	          step: function (now) {
	              $(this).text(Math.ceil(now));
	          }
	      });
	    });
	  }
	}
});