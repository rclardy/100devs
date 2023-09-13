//Write your pseduo code first!

//only on click run temp conversion
document.querySelector("#convertToFah").addEventListener("click", celToFah);
document.querySelector("#convertToCel").addEventListener("click", fahToCel);
document.querySelector("#fahBtn").addEventListener("click", showFahItems);
document.querySelector("#celBtn").addEventListener("click", showCelItems);

//onclick only show fahrenheit conversion

function showFahItems() {
	document.querySelector("#fahBox").classList.toggle("hidden");
	document.querySelector("#celBox").classList.add("hidden");
}

//onclick only show celsius conversion

function showCelItems() {
	document.querySelector("#fahBox").classList.add("hidden");
	document.querySelector("#celBox").classList.toggle("hidden");
}

function celToFah() {
	//get value out of input
	let userTemp = document.querySelector("#userTemp").value;
	//convert the value
	let f = userTemp * 1.8 + 32.0;
	//show the value on dom
	document.querySelector(
		"#results"
	).innerText = `${userTemp} Celsius is converted to ${f} Fahrenheit.`;
}

function fahToCel() {
	let userTemp = document.querySelector("#userTemp2").value;
	let c = (userTemp - 32) / 1.8;
	document.querySelector(
		"#results1"
	).innerText = `${userTemp} Fahrenheit is converted to ${c} Celsius`;
}
