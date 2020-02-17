$(function(){
	$('.sandwich').click(function(){
		var menu = $('.header-nav__list');
		$(this).toggleClass('active');
		if(menu.is(':visible')) {
			menu.slideUp();
		} else {
			menu.slideDown();
		}
	});


    $('.scroll-link').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });





$('.js-review-slider').slick({
  dots: true,
  // infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '.reviews-slider__prev',
  nextArrow: '.reviews-slider__next',
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }]
});

$('.js-price-item__wrap').slick({
  dots: true,
  // infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '.price-slider__prev',
  nextArrow: '.price-slider__next',
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        adaptiveHeight: true
      }
    }]
});

$("form").on("submit", function() {
    var formID = '#' + $(this).attr("id");
   
    var th = $(this);
    $(formID).validate({
        rules: {
            name: 'required',
            phone: 'required'
        },
        messages: {
            name: 'Введите корректные данные',
            phone: 'Введите корректные данные'
        }
    });
    if ($(formID).valid()) {
        // $.ajax({
        //     type: "POST",
        //     url: "mail.php",
        //     data: th.serialize()
        // }).done(function() {
        //     console.log('test');
        //     console.log($(this));
            $(this).hide();
            $(this).parent().find('.success-form').addClass('success-show')
        // });

    }
    return false;
});

$('.popup-link').magnificPopup({
    type: 'inline',
});

$('#close-popup').click(function(){
  $.magnificPopup.close();
});

  function scrollMenu() {
        var windowTop = $(window).scrollTop();
        if (windowTop > 100) {
            $('.header-nav').addClass('fixed');
        } else {
            $('.header-nav').removeClass('fixed');

        }

    }
    scrollMenu();

      $(window).scroll(function() {
        scrollMenu();
    });







});

    var slideIndex = 1;
showSlides(slideIndex);

        function myModal(){
var modal = document.getElementById('myModal');
modal.style.display = 'block';
}
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


$('.other-arrow').click(function(){
  $('html, body').animate({ scrollTop:  $(this).offset().top + 100 }, 'slow');
});


$(window).on('load', function() {
  $('.preloader').delay(1000).fadeOut('slow');
});
