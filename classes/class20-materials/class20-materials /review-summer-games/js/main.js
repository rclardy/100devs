//Create a function that takes in an array of numbers. Multiply each number together and alert the product.
function bigProd(arr) {
	let product = 1;
	//arr.foreach((num) => (product *= num));
	for (let i = 0; i < arr.length; i++) {
		product *= arr[i];
	}
	alert(product);
}

bigProd([10, 2, 3]);
