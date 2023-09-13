//Create a conditonal that checks their age

//If under 16, tell them they can not drive

//If under 18, tell them they can't hate from outside the club, because they can't even get in

//If under 21, tell them they can not drink

//If under 25, tell them they can not rent cars affordably

//If under 30, tell them they can not rent fancy cars affordably

//If under over 30, tell them there is nothing left to look forward too

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

let click = document.querySelector("h1").addEventListener("click", run);

function run() {
	let input = document.querySelector("#danceDanceRevolution").value;
	let newInput = Number(input);
	let output = document.querySelector("p");
	if (newInput < 16) {
		output.innerText = "You can not Drive!";
	} else if (newInput < 18) {
		output.innerText = "can't hate from outside the club";
	} else if (newInput < 21) {
		output.innerText = "You can not drink";
	} else if (newInput < 25) {
		output.innerText = "You can not rent a car affordable";
	} else if (newInput < 30) {
		output.innerText = "You can not rent fancy cars affordably";
	} else if (newInput > 30) {
		output.innerText = "You have nothing left to look forward to.";
	}
}
