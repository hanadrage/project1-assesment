document.addEventListener("DOMContentLoaded", function(e){
	e.preventDefault();
	var number = 0;
	var increment;
	var decrement;
	var numberValue = document.getElementById("inp")
	document.getElementById('negative').addEventListener('click', function(){
		number += 1;
		var increment = document.getElementById("nn");
		increment.value = number;
	});
	document.getElementById('plus').addEventListener('click', function(){
		number -= 1;
		var decrement = document.getElementById("nn");
		decrement.value = number;
	});	
})


