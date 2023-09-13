//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ["Harry Potter", "Star Wars", "movie1", "movie2"];

for (let i = 0; i < movies.length; i++) {
	document.querySelector("h2").innerText += movies[i];
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.

let nums = [10, 20, 30];
nums.forEach((item, idx) => {
	nums[idx] = item + 3;
});

//Find the average of all the numbers from question three

let sum = 0;
nums.forEach((x) => (sum += x));
console.log(sum / nums.length);
// for (let i = 0; i < nums.length; i++) {
// 	sum += nums[i];
// }
