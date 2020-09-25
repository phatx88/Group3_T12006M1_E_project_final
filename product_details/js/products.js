/* ---------------------------------------------------
    Bach to top
----------------------------------------------------- */

$('.back-to-top').click(function (e) {
  e.preventDefault();
  $('html').animate({ scrollTop: 0 }, 2000);
});

/* ---------------------------------------------------
    Smooth Scrolling
----------------------------------------------------- */
$('#content .collapse li.active a').on('click', function (e) {
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


const setFocus = (evt) => {
  const rateRadios = document.getElementsByName('rate');
  const rateRadiosArr = Array.from(rateRadios);
  const anyChecked = rateRadiosArr.some(radio => { return radio.checked === true; });
  // console.log('anyChecked', anyChecked);
  if (!anyChecked) {
    const star1 = document.getElementById('star1');
    star1.focus();
    // star1.checked = true;
  }
};

const navRadioGroup = (evt) => {
  // console.log('key', evt.key, 'code', evt.code, 'which', evt.which);
  // console.log(evt);

  const star1 = document.getElementById('star1');
  const star2 = document.getElementById('star2');
  const star3 = document.getElementById('star3');
  const star4 = document.getElementById('star4');
  const star5 = document.getElementById('star5');

  if (['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(evt.key)) {
    evt.preventDefault();
    // console.log('attempting return');
    if (evt.key === 'ArrowRight' || evt.key === 'ArrowDown') {
      switch (evt.target.id) {
        case 'star1':
          star2.focus();
          star2.checked = true;
          break;
        case 'star2':
          star3.focus();
          star3.checked = true;
          break;
        case 'star3':
          star4.focus();
          star4.checked = true;
          break;
        case 'star4':
          star5.focus();
          star5.checked = true;
          break;
        case 'star5':
          star1.focus();
          star1.checked = true;
          break;
      }
    } else if (evt.key === 'ArrowLeft' || evt.key === 'ArrowUp') {
      switch (evt.target.id) {
        case 'star1':
          star5.focus();
          star5.checked = true;
          break;
        case 'star2':
          star1.focus();
          star1.checked = true;
          break;
        case 'star3':
          star2.focus();
          star2.checked = true;
          break;
        case 'star4':
          star3.focus();
          star3.checked = true;
          break;
        case 'star5':
          star4.focus();
          star4.checked = true;
          break;
      }
    }
  }
};


