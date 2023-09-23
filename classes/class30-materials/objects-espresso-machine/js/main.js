//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class coffee {
  constructor(size, temp, roast, cream) {
    this.size = size;
    this.temp = temp;
    this.roast = roast;
    this.cream = cream;
  }
  ready() {
    alert('Coffee Ready!');
  }
  start() {
    alert('coffee starting');
  }
  stopping() {
    alert('coffee stopping!');
  }
}

class EspressoMachine {
  constructor(color, make, model, price) {
    this.color = color;
    this.make = make;
    this.model = model;
    this.price = price;
  }
  turnOn() {
    console.log('Good day, I am now on!');
  }
  steam() {
    console.log('ITSSSSSSSSSSS');
  }
  brew() {
    console.log('ducin in your cup');
  }
}

let gaggia = new EspressoMachine('red', 'Gaggia', 'Classic Pro', 500);
