$(function() {

	var $menu = $('#my-menu').mmenu({
		extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black', "position-right" ],
		navbar: {
			title: ''
		}
	});

	var $icon = $("#my-icon");
	var API = $menu.data( "mmenu" );

	$icon.on( "click", function() {
	   API.open();
	});

	API.bind( "open:finish", function() {
	   setTimeout(function() {
	      $icon.addClass( "is-active" );
	   }, 50);
	});
	API.bind( "close:finish", function() {
	   setTimeout(function() {
	      $icon.removeClass( "is-active" );
	   }, 50);
	});

	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselService();
		}, 100);
	});


	 $(".owl-carousel").owlCarousel({
	 	// loop: true,
	 	nav: true,
	 	smartSpeed: 700,
	 	navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
	 	responsiveClass: true,
	 	dots: false,
	 	responsive: {
	 		0: {
	 			items: 1
	 		},
	 		800: {
	 			items: 2
	 		},
	 		1100: {
	 			items: 3
	 		}
	 	}
	 });

	 function carouselService() {
	 	$('.carousel-services-item').each(function() {
	 		var ths = $(this),
	 			thsh = ths.find('.carousel-services-content').outerHeight();
	 			ths.find('.carousel-services-image').css('min-height', thsh);
	 	});
	 }carouselService();

	 $('.carousel-services-composition .h3').each(function() {
	 	var ths = $(this);
	 	ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	 });

	 $('section .h2').each(function() {
	 	var ths = $(this);
	 	ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	 });

	 function onResize() {
	 	$('.carousel-services-content').equalHeights();
	 }onResize();
	 window.onresize = function() {onResize()}
});


$('select').selectize();


$('.reviews').owlCarousel({
	loop: true,
	items: 1,
	smartSpeed: 700,
	// autoHeight: true

});

$('.partners').owlCarousel({
	loop: true,
	items: 4,
	smartSpeed: 700,
	dots: false,
	nav: true,
	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	responsiveClass: true,
	responsive: {
		0: {
			items: 1
		},
		768: {
			items: 2
		},
		992: {
			items: 3
		},
		1200: {
			items: 4
		}
	}
});


$("form.callback").submit(function() {
	var th = $(this);
	// $.ajax({
	// 	type: "POST",
	// 	url: "mail.php",
	// 	data: th.serialize()
	// }).done(function() {
		$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
		setTimeout(function() {
			$(th).find('.success').removeClass('active').fadeOut();
			th.trigger("reset");
		}, 3000);
	// });
	return false;
});


$(window).scroll(function(){
	if($(this).scrollTop() > $(this).height()) {
		$('.top').addClass('active');
	} else {
		$('.top').removeClass('active');
	}
});


$('.top').click(function() {
	$('html, body').stop().animate({scrollTop: 0}, 'slow');
});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});
