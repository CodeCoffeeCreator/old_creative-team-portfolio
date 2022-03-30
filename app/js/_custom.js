document.addEventListener("DOMContentLoaded", function() {

	$('.section-top__menu ul a, .arrow-up a, .section-wrap__icon a, .section-top__info .buttons a, .history__right a, .free .free__btn').mPageScroll2id();

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.arrow-up').addClass('active');
		} else {
			$('.arrow-up').removeClass('active');
		}
	});

	$('.recent__block').mixItUp();
	$('.recent a').on('click', function() {
			$(this).toggleClass('active');
	});

	//portfolio popup
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});

	// counter 
	var a = 0;
	$(window).scroll(function() {
		var oTop = $('#counter').offset().top - window.innerHeight;
		if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
						countNum: countTo
					},
					{
						duration: 2000,
						easing: 'swing',
						step: function() {
							$this.text(Math.floor(this.countNum));
						},
						complete: function() {
							$this.text(this.countNum);
							//alert('finished');
						}
					});
			});
			a = 1;
		}
	});

});
