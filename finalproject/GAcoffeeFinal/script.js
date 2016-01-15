$(document).ready(function (){

	$(function(){
    $('.jumbotron img:gt(0)').hide();
    setInterval(function(){
      $('.jumbotron :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.jumbotron');}, 
      2000);
});


	$('.menu').hover(function () {
		
	
		$('.menu h1').slideToggle('fast');


	});


	$('.ourstory').hover(function (){

		$('.ourstory h1').slideToggle('fast');


	});
	$('.sub').hover(function (){

		$('.sub h1').slideToggle('fast');


	});
	$('.locations').hover(function (){

		$('.locations h1').slideToggle('fast');


	});
	$('.brew').hover(function (){

		$('.brew h1').slideToggle('fast');


	});

});