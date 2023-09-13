//Write your pseduo code first!
// f = C * 1.8000 + 32.00

// need the value of C
//convert c to f
//display new value

document.querySelector("#clickMe").addEventListener("click", cToF);
document.querySelector("#clickMe2").addEventListener("click", fToC);

function tempChoice() {
	document.querySelector("#tempDropDown").classList.toggle("show");
}

function cToF() {
	let cel = document.querySelector("#celsius").value;
	let fah = cel * 1.8 + 32.0;
	let result = `It is ${fah} Fahrenheit outside`;
	document.querySelector("#displayMe1").innerText = result;
}

function fToC() {
	let fah = document.querySelector("#fah").value;
	let cel = (fah - 32) / 1.8;
	let result = `it is ${cel} Celsius outside.`;
	document.querySelector("#displayMe").innerText = result;
}

// C = ((f - 32) / 1.8000)
