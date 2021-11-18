(function($) {	
	"use strict";

	//1.Hide Loading Box (Preloader)
	function Preloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}	
	
	//2.Update header style + Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			if (windowpos >= 150) {
				$('.main-header').addClass('fixed-header');
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.main-header').removeClass('fixed-header');
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}	
	headerStyle();

	//3.Search Btn
	if($('.search-wrap .fa').length){
		$('.search-wrap .fa').on('click', function() {
			$('.search-form-wrap').toggleClass('search-form-active');
		});
	}


	//4.Home Slider One
	if ($('.slider-one').length) {
		$('.slider-one').owlCarousel({
			loop: true,
			autoplay: true,
			smartSpeed: 700,
			autoplayTimeout: 4500,
			autoplayHoverPause: true,
			center: false,
			nav: true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots: true,
			items: 1,
			responsive: {
				300: {
					nav: false
				},
				480: {
					nav: false
				},
				768: {
					nav: false
				},
				1170: {
					nav: true
				}
			}
		});
	}
	
	//5.Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').click('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
				
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').click('click', function(e) {
			e.preventDefault();
		});
	}


	/*=================================*/
	/* ISOTOPE  Gallery*/
	/*=================================*/
	var items_container = jQuery('.items-container');
	var filters = jQuery('.filters');
	// use imagesLoaded, instead of window.load
	try{
		items_container.imagesLoaded( function() {
			items_container.isotope({
				itemSelector: '.masonry-item',
				// masonry is default layoutMode, no need to specify it
				sortBy: 'random'
			});
		})
	} catch(err) {
	}

	// Attach a delegated event handler
	// use imagesLoaded, instead of window.load
	try{
		filters.on( "click", "li", function() {
			var filterValue = $(this).attr('data-filter');
			items_container.isotope({ filter: filterValue });
		});
	} catch(err) {
	}

	//7.Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);	
		});
	}



	//9.Accordion Box
	function accordion() {
	    if($('.accordion-box').length){
	        $(".accordion-box").on('click', '.accord-btn', function() {

	            if($(this).hasClass('active')!==true){
	            $('.accordion .accord-btn').removeClass('active');

	            }

	            if ($(this).next('.accord-content').is(':visible')){
	                $(this).removeClass('active');
	                $(this).next('.accord-content').slideUp(500);
	            }else{
	                $(this).addClass('active');
	                $('.accordion .accord-content').slideUp(500);
	                $(this).next('.accord-content').slideDown(500);	
	            }
	        });	
	    }
	}
	
	//10.Sponsors Slider
	if ($('.sponsors-slider').length) {
		$('.sponsors-slider').owlCarousel({
			loop:true,
			margin:120,
			nav:true,
			smartSpeed: 400,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				300:{
					items:1
				},
				400:{
					items:2
				},
				800:{
					items:3
				},
				1200:{
					items:5
				}
			}
		});    		
	}

	//11.Four Column Carousel Slider
	if ($('.four-column-carousel').length) {
		$('.four-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1070:{
					items:4
				}
			}
		});    		
	}
	
	//12.Three Column Carousel Slider
	if ($('.testimonials-slide').length) {
		$('.testimonials-slide').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				800:{
					items:1
				},
				1000:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	//13.Two Column Carousel Slider
	if ($('.two-column-carousel').length) {
		$('.two-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				1200:{
					items:2
				}
			}
		});    		
	}
	
	//14.Single Item Slider
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 700,
			autoplay: 4000,
			items:1,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ]
		});    		
	}	

	//15.LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}

	//21.Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

	$("#style-switcher" ).on('click', function() {
		$("#color1").attr("href", "css/skins/" );
		return false;
	});


/* ========================When Document is Scrolling, Do===================== */
	
	$(window).scroll('scroll', function() {
		// add your functions
		(function ($) {
			headerStyle();
			//factCounter();
		})(jQuery);
	});
	
/* ========================When Document is Loaded, Do===================== */

	$(window).on('load', function() {
		// add your functions
		(function ($) {
			Preloader();
			accordion();
		})(jQuery);
	});

	/* ========================When Document is ready, Do===================== */

	$(document).ready(function(){
		// add your functions
		(function ($) {
			CounterUp();
		})(jQuery);
	});

	function CounterUp() {
		$('.count-text').counterUp({
			delay: 10,
			time: 1000
		});
	}
})(window.jQuery);