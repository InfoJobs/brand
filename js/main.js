(function (d) {
	
	$(d).ready(function() {
		
		$('.js-download').on('click', function(event) {
			event.preventDefault();
			$(this).parent().parent().find('.download-links')
				.removeClass('fade-down')
				.addClass('fade-up');
		});

		$('.js-download-close').on('click', function(event) {
			event.preventDefault();
			$(this).parent().parent().parent()
				.removeClass('fade-up')
				.addClass('fade-down');
		});



	});

})(document);