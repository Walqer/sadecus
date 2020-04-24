var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },
    620: {
      slidesPerView: 2
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3
    },
    // when window width is >= 640px
    1065: {
      slidesPerView: 4
    }
  },

});


var swiper2 = new Swiper('.swiper-container2', {
  slidesPerView: '1',
  spaceBetween: -50,
  loop: true,
  slidesOffsetBefore: 50,
  initialSlide: 1,
  navigation: {
    nextEl: '.project-slide-next',
    prevEl: '.project-slide-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesOffsetBefore: 0,
      spaceBetween: 0,
    },
    620: {
      spaceBetween: 100,
      slidesOffsetBefore: 0,
    },
    1065: {
      spaceBetween: -50,
      slidesOffsetBefore: 50,
    }
  },
});





$(document).ready(function () {
  $('.burger').click(function (event) {
    $('.burger, .menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.popup-btn').click(function (event) {
    $('.popup-form').show();
    
  });

  $('.close-btn').click(function (event) {
    $('.popup-form').hide();
  });

  $(this).keydown(function(eventObject){
    if (eventObject.which == 27)
        $('.popup-form').hide();
  });
});


$(window).scroll(function() {

  var st = $(this).scrollTop() /5;
  st= -st;

	$(".arrow1").css({
		"transform" : "translate3d(0px, " + st   + "%, .01px)",
	});
	$(".arrow2").css({
		"transform" : "translate3d(0px, " + st/2   + "%, .01px)",
	});
	$(".arrow3").css({
		"transform" : "translate3d(0px, " + st/3   + "%, .01px)",
	});

});

$("a[href='#top']").click(function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
});

new WOW().init();