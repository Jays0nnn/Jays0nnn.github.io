// Great job on this. Your solution works well!

$(document).ready(function (){

	var total = 0;


	$('#red').click(red)

	function red () {
		$('#out').css('background-color','red');
	}

	$('#blue').click(blue)

	function blue () {
		$('#out').css('background-color','blue');
	}

	$('#out').click(clear)

	function clear () {
		$('#out').css('background-color','white');
		total = 0;
		$('#out').text(total);
	}

	$('#a10').click(ten)

	// for function name might be best to be more clear such as "addTen"
	function ten () {
		total += 10;
		$('#out').text(total);
	}

	$('#a20').click(twenty)

	function twenty () {
		total += 20;
		$('#out').text(total);
	}
	$('#a30').click(thirty)

	function thirty () {
		total += 30;
		$('#out').text(total);
	}

	$('#n10').click(mten)

	function mten () {
		total -= 10;
		$('#out').text(total);
	}

	$('#n20').click(mtwenty)

	// best to use camelcase when naming variables and functions in javascript so "minusTwenty"
	function mtwenty () {
		total -= 20;
		$('#out').text(total);
	}
	$('#n30').click(mthirty)

	function mthirty () {
		total -= 30;
		$('#out').text(total);
	}
	
})

