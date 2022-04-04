/**
 * @author minks
 */

$(function() {
	//전체 카테고리 서브 메뉴 보이기&숨기기
	$('nav.nav .nav_menu>li.nav_sitemap').on("mouseover", function(evt) {
		evt.preventDefault();
        $(this).children('.nav_sub_menu').stop(true,true).slideDown(200);
	});
	
	$('nav.nav .nav_menu>li.nav_sitemap').on("mouseleave", function(evt) {
		evt.preventDefault();
        $(this).children('.nav_sub_menu').stop(true,true).slideUp(200);
	});

	$('.mb_area .mb_box .nav_menu>li .nav_sitemap_tit').click(function() {
		if ($(this).next('.nav_sub_menu').css("display") == "block") {
			$(this).next('.nav_sub_menu').stop(true,true).slideUp();
			$(this).removeClass("on");
			return false;
		} else {
			$(this).next('.nav_sub_menu').stop(true,true).slideDown();		
			$(this).addClass("on");
			return false;
		}
	});

    //모바일 슬라이드 메뉴 보이기&숨기기
	$('.mb_area .mb_btn').click(function() {
		if ($('.mb_area .mb_menu').css("display") == "none") {
			$('.mb_area .mb_menu').css('display','block');
			$('.mb_area .mb_menu').css('z-index','999');
			$('.mb_area .mb_box').css('left','0px');
			$('.mb_area .mb_btn').addClass('mb_btn_over');
			$('.mb_area .line1').addClass('line11');
			$('.mb_area .line2').addClass('line22');
			$('.mb_area .line3').addClass('line33');
			//$('body').css('overflow','hidden');
		} else {
			$('.mb_area .mb_menu').css('display','none');
			$('.mb_area .mb_menu').css('z-index','-1');
			$('.mb_area .mb_box').css('left','-300px');
			$('.mb_area .mb_btn').removeClass('mb_btn_over');
			$('.mb_area .line1').removeClass('line11');
			$('.mb_area .line2').removeClass('line22');
			$('.mb_area .line3').removeClass('line33');
			//$('body').css('overflow','scroll');
		}
	});
	
	//헤더 팝업 닫기
    $(".top_popup_area .top_popup_btn img").click(function() {
        $(".top_popup_area").slideUp(400);
		$('header.header').addClass('top_popup_none');
		$('.mb_area').addClass('top_popup_none');
		$('.fk_header').addClass('top_popup_none');
    });
	
	//swiper 슬라이드 (배너)
	var banner_swiper = new Swiper('.banner_slide', {
        observer: true,
        observeParents: true,
        slidesPerView : 1,
        autoplay: {
            delay: 4000,
			disableOnInteraction: false
        },
        pagination: {
            el: '.banner_slide_pagination',
            clickable: true,
        },
        watchOverflow: true
    });
	
	//swiper 슬라이드 (레시피)
	var recipe_swiper = new Swiper('.recipe_slide', {
        observer: true,
        observeParents: true,
        slidesPerView : 1,
        autoplay: {
            delay: 4000,
			disableOnInteraction: false
        },
        pagination: {
            el: '.recipe_slide_pagination',
            clickable: true,
        },
        watchOverflow: true
    });
	
	$(".recipe_slide .recipe_slide_pause_btn").click(function() {
		recipe_swiper.autoplay.stop();
		$(this).css("display","none");
		$(this).siblings(".recipe_slide_play_btn").css("display","block");
	});
	
	$(".recipe_slide .recipe_slide_play_btn").click(function() {
		recipe_swiper.autoplay.start();
		$(this).css("display","none");
		$(this).css("display","none");
		$(this).siblings(".recipe_slide_pause_btn").css("display","block");
	});
	
	//slick 슬라이드 (상품)
    $('.goods_slide_list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: false,
        pauseOnHover: true,
        prevArrow: '<div class="goods_slide_prev_arrow"><img src="img/slide_prev_arrow.png" alt="slide_prev_arrow"></div>',
        nextArrow: '<div class="goods_slide_next_arrow"><img src="img/slide_next_arrow.png" alt="slide_next_arrow"></div>',
		responsive: [
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 3
                }
            },
			{
                breakpoint: 551,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});

