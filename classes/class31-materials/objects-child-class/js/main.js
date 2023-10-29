//Create an a class and extend it - Can be anything you would like it to be!

class Animal {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  speak() {
    console.log(`${this._name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this._breed = breed;
  }
  get breed() {
    return this._breed;
  }
  speak() {
    super.speak();
    console.log(`${this.name} barks`);
  }
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    this._breed = breed;
  }
  get breed() {
    return this.breed;
  }
  speak() {
    super.speak();
    console.log(`${this.name} meows`);
  }
}

// class Animal {
//   constructor(name) {
//     this._name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   speak() {
//     console.log(`${this.name} makes a sound`);
//   }
// }

// let simba = new Animal('Simba');

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }
// }

// class Cat extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }
// }

// let juniper = new Cat('Juniper', 'Rag Doll');

// class Food {
//   constructor(catagory) {
//     this.catagory = catagory;
//   }
//   munch() {
//     console.log(`${this.catagory} yummy food.`);
//   }
// }

// class Meat extends Food {
//   constructor(catagory, animal, cut) {
//     super(catagory);
//     this.animal = animal;
//     this.cut = cut;
//   }
// }

// let beef = new Meat('meat', 'cow', 'tri-tip');
