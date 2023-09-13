// *Variables*
// Create a variable and console log the value
let x = 5;
console.log(x);

// Create a variable, add 10 to it, and alert the value
let y = 0;
y = y + 10;
alert(y);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(n1, n2, n3, n4) {
	alert(n1 - n2 - n3 - n4);
}

// Create a function that divides one number by another and returns the remainder
function div2(num1, num2) {
	return num1 % num2;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
let yell = function (num1, num2) {
	if (num1 + num2 > 50) {
		alert("Jumanji!");
	}
};

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
let moreYell = function (num1, num2, num3) {
	let prod = num1 * num2 * num3;
	if (prod % 3 === 0) {
		alert("ZEBRA");
	}
};

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

let loop1 = function (word, num) {
	for (i = 0; i < num; i++) {
		console.log(word);
	}
};
