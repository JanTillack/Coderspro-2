var main = function () {
	$('#sum').click(function(){
		var a =	parseNumber('#number_a');
		var b = parseNumber('#number_b');

		var sum = add(a,b);
		printScore(sum);
	});

	$('#sub').click(function(){
		var a =	parseNumber('#number_a');
		var b = parseNumber('#number_b');

		var substrat = sub(a,b);
		printScore(substrat);	
	});




}

function parseNumber (id){
var number =	$(id).val();
number = checkCommas(number);
number = parseFloat(number);
return number;
}
function parseNumber (id){
	var number = $(id).val();
	number = checkCommas(number);
	number = parseFloat(number);
	return number;
}

function checkCommas(temp){
	if(temp.indexOf(',') > -1){
		temp.replace(',' , '.');
	}
	return temp;
}

function add(a,b){
	var c = a + b;
	return c;
}

function printScore(score){
	$('#score_indicator').text(score);
}




$(document).ready(main);
