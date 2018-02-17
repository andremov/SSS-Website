
	/* Filled Button */


$(document).ready(function() {

	if (window.location.hash != "") {
		var element = $(window.location.hash);

		if (element.is('.comment')) {
			scrollTo(element, function() {
				element.slideDown(1000);
			});

			element.hide();
		} else {
			scrollTo(element);
		}
	}
});

$('.filled-button, .nav ul li a').on('mouseover', function() {
	$(this).removeClass('filled-button-out');
	$(this).addClass('filled-button-in');

	if($(this).is('.filled-button')) {
		$(this).css('color', $(this).css('backgroundColor'));
	}
});

$('.filled-button, .nav ul li a').on('mouseout', function() {
	$(this).removeClass('filled-button-in');
	$(this).addClass('filled-button-out');

	if($(this).is('.filled-button')) {
		$(this).css('color', '');
	}
});
