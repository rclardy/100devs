// *Variables*
// Create a variable and console log the value
let num = 5;
console.log(num);

// Create a variable, add 10 to it, and alert the value
let othaNum = 15;
othaNum += 10;
alert(othaNum);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFourandAlert(n1, n2, n3, n4) {
  alert(n1 - n2 - n3 - n4);
}

// Create a function that divides one number by another and returns the remainder

function returnRemainder(robot, unicorn) {
  return robot % unicorn;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoAndAlert(n1, n2) {
  let sum = n1 + n2;
  if (sum > 50) {
    alert('Jumanji');
  }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiThreeAndCheck(n1, n2, n3) {
  let product = n1 * n2 * n3;
  if (product % 3 === 0) {
    alert('ZEBRA');
  }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function loopWordXTimes(word, num) {
  for (let i = 1; i <= num; i++) {
    console.log(word);
  }
}
