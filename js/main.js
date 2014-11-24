(function (d) {
	
	$(d).ready(function() {
		
		$('.js-download').on('click', function(event) {
			event.preventDefault();
			$(this).addClass('white-fake');
			$(this).parent().parent().find('.download-links')
				.removeClass('fade-down')
				.addClass('fade-up');
		});

		$('.js-download-close').on('click', function(event) {
			event.preventDefault();
			$('.js-download').removeClass('white-fake');
			$(this).parent().parent().parent()
				.removeClass('fade-up')
				.addClass('fade-down');
		});



	});

})(document);