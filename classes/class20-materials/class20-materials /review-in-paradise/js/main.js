// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let x = "bob";
//alert((x = "burger"));
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let newX = "yeet";
//alert(newX[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
let prod3 = (n1, n2, n3) => alert((n1 / n2) * n3);
//prod3(10, 5, 2);
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
const cubeRoot = (num1) => console.log(Math.cbrt(num1).toFixed(4));
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
const summerMonth = (month) => {
	let monthLower = month.toLowerCase();
	switch (monthLower) {
		case "june":
		case "july":
		case "august":
			alert("YAY");
			break;
		default:
			alert("Booo");
	}
};
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skips5(n) {
	for (let i = 1; i <= n; i++) {
		if (i % 5 !== 0) {
			console.log(i);
		}
	}
}
