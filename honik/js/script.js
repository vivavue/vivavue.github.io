$(function() {
    //DRILL
console.clear()

const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'))
const backLink = `
      <li>
    <div class="sandwich active">
        <span class="sandwich_line sandwich_line_top"></span>
        <span class="sandwich_line sandwich_line_middle"></span>
        <span class="sandwich_line sandwich_line_bottom"></span>
    </div>
</li>
<li class="nav-item">
  <a class="nav-link nav-back-link" href="javascript:;">
    Назад
  </a>
</li>`

navExpand.forEach(item => {
    item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink)
    item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
    item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
});


    // MOBILE MENU SCROLL
    $(window).scroll(function() {
        if ($(window).scrollTop()) {
            $('.header-contacts-small').addClass('active');
        } else {
            $('.header-contacts-small').removeClass('active');
        }
    })
    // MOBILE MENU SCROLL END
    // COLLAPSE
    $(function() {
        $('.panel-collapse').on('show.bs.collapse', function() {
            $(this).siblings('.panel-heading').addClass('active');
        });

        $('.panel-collapse').on('hide.bs.collapse', function() {
            $(this).siblings('.panel-heading').removeClass('active');
        });
    });
    // COLLAPSE END
    //    SANDWICH
    $('.sandwich').click(function() {
        $('body').toggleClass('nav-is-toggled');
    });
    //SANDWICH END
    //    GALLERY
    $(".button").click(function() {
        var value = $(this).attr("data-filter");
        if (value == "all") {
            $(".filter").show("2000");
        } else {
            $(".filter").not("." + value).hide("2000");
            $(".filter").filter("." + value).show("2000");
        }
    });


    $("ul .button").click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    //    GALLERY END

    //    REVIEWS SLIDER
    var swiper = new Swiper('.reviews_slider', {
        paginationClickable: true,
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
        slidesPerView: 2,
        spaceBetween: 20,
        breakpoints: {

            991: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        },
        pagination: '.swiper-pagination',
    })
    //    REVIEWS SLIDER END

    //    ARTICLES SLIDER
    var swiper = new Swiper('.articles_slider', {
        paginationClickable: true,
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
        nextButton: '.swiper-button-next1',
        prevButton: '.swiper-button-prev1',
        slidesPerView: 2,
        spaceBetween: 25,
        breakpoints: {
            991: {
                slidesPerView: 1,
                spaceBetween: 20
            }
        },
        pagination: '.swiper-pagination',
    });
    //    ARTICLES SLIDER END
/* Phone maska */     
 $("#mtel").mask("+7 (999) 999 - 9999");
 $("#ktel").mask("+7 (999) 999 - 9999");
 $("#ntel").mask("+7 (999) 999 - 9999");
/* Phone maska end */ 
    // TO TOP   
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.to-top').fadeIn();
        } else {
            $('.to-top').fadeOut();
        }
    });

    $('.to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });
    // TO TOP END
});


//ACCORDION
! function(i) {
    var o, n;
    i(".title_block").on("click", function() {
        o = i(this).parents(".accordion_item"), n = o.find(".info"),
            o.hasClass("active_block") ? (o.removeClass("active_block"),
                n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(300),
                o.siblings(".active_block").removeClass("active_block").children(
                    ".info").stop(!0, !0).slideUp(300))
    })
}(jQuery);