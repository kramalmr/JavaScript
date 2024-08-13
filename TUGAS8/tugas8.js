// MUHAMMAD AKRAM ALMAIR JS OOP INHERITANCE AND POLYMORPHISM

// TUGAS 8

// SOAL 1
class vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  start() {
    return `${this.brand} is Starting`;
  }
}

class car extends vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  start() {
    return "Car is Starting";
  }
}

let toyota = new vehicle("Toyota");
console.log(toyota);
console.log(toyota.start());

let xpander = new car("Toyota", "Xpander");
console.log(xpander);
console.log(xpander.start());

// SOAL 2

class Shape {
  constructor() {}
  draw() {
    return "Drawing Shape";
  }
}

class Rectangle extends Shape {
  constructor() {
    super();
  }
  draw() {
    return "Drawing Rectangle";
  }
}

const shape1 = new Shape();
console.log(shape1);
console.log(shape1.draw());

const shape2 = new Rectangle();
console.log(shape1);
console.log(shape2.draw());

function renderShape(shape) {
  return shape.draw();
}

console.log(renderShape(shape1));
console.log(renderShape(shape2));

// SOAL 3
class Person {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    return `My name is ${this.name}`;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }
  introduce() {
    return `Hello, my name is ${this.name}, I am an ${this.position}`;
  }
}

class Manager extends Employee {
  constructor(name, position) {
    super(name, position);
  }
  introduce() {
    return `Hello, my name is ${this.name}, I am an ${this.position}, and i manage a team.`;
  }
}

let const1 = new Person("Akram");
console.log(const1);
console.log(const1.introduce());
let const2 = new Employee("Akram", "Employer");
console.log(const2);
console.log(const2.introduce());
let const3 = new Manager("Akram", "Manager");
console.log(const3);
console.log(const3.introduce());
