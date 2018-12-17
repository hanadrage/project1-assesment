document.addEventListener("DOMContentLoaded", function(e){
	e.preventDefault();
	var number = 0;
	var increment;
	var decrement;
	var heading1;
	var heading2;
	var numberValue = document.getElementById("inp")
	document.getElementById('negative').addEventListener('click', function(){
		number += 1;
		var increment = document.getElementById("nn");
		increment.value = number;
		var heading1 = document.getElementById("inp");
		heading1.innerHTML = number;
	});
	document.getElementById('plus').addEventListener('click', function(){
		number -= 1;
		var decrement = document.getElementById("nn");
		decrement.value = number;
		var heading2 = document.getElementById("inp");
		heading2.innerHTML = number;
	});	
})


