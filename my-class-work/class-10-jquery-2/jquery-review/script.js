$('.fbox').click(function () {
	$('.fbox').animate( {
		'height': '+=500px', 'width': '+=500px'
	});
	$('.fbox').css('background-color', 'green');
	$('.fbox').text('hey there boi');

});