// *Variables*
// Create a variable and console log the value
const fName = "CoffeeNomad";
console.log(fName);
// Create a variable, add 10 to it, and alert the value
const x = 5;
// alert(x + 5);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
let subFour = function (num1, num2, num3, num4) {
	alert(num1 - num2 - num3 - num4);
};
// Create a function that divides one number by another and returns the remainder
let divOne = function (num1, num2) {
	return num1 % num2;
};

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
let sum2 = (num1, num2) => {
	let result = num1 + num2;
	if (result > 50) {
		alert("Jumanji");
	}
};

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

let product3 = (num1, num2, num3) => {
	let x = (num1 * num2 * num3) % 3;
	if (x == 0) {
		alert("ZEBRA");
	}
};
