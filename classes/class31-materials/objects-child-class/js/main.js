//Create an a class and extend it - Can be anything you would like it to be!

class Food {
  constructor(catagory) {
    this.catagory = catagory;
  }
  munch() {
    console.log(`${this.catagory} yummy food.`);
  }
}

class Meat extends Food {
  constructor(catagory, animal, cut) {
    super(catagory);
    this.animal = animal;
    this.cut = cut;
  }
}

let beef = new Meat('meat', 'cow', 'tri-tip');

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

let simba = new Dog('Simba', 'Shepard');

class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

let juniper = new Cat('Juniper', 'Rag Doll');
