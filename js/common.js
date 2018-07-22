$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 0,
	nav: false,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 3
		},
		1000: {
			items: 4
		}
	}
});

$(document).ready(function () {

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function () {
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

});

$('.parallax-window').parallax({imageSrc: '../img/bg-faq.jpg'});