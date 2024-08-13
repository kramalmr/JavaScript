// MUHAMMAD AKRAM ALMAIR JS OOP INHERITANCE AND POLYMORPHISM

// TUGAS 8

// SKILVUL
// INHERITANCE
/*
1.Buatlah class Pelajar yang meng-extends dari class Orang.

2.Buatlah constructor yang memiliki parameter nama, umur, dan namaSekolah.

3.Di dalam constructor, tambahkan kode method super()yang memiliki argumen nama dan umur .

4.Buatlah properti namaSekolahmenggunakan keyword this. Assign properti namaSekolah dengan parameter namaSekolah yang dimiliki oleh constructorA

5.Di luar blok kode constructor, buatlah method bernama belajar yang mengembalikan nilai string `${this.nama} belajar di ${this.namaSekolah}`.

6.Di luar blok kode class, buatlah instance objek dari class Pelajar bernama user. Berikan argumen "Terra", 17, dan "Skilvul".

7.Lakukan console.log() pada variabel user. Cek pada tab Console untuk melihat data.

*/

class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  tidur() {
    return `${this.nama} sedang tidur`;
  }

  makan() {
    return `${this.nama} sedang makan`;
  }
}

// Tulis kode kamu di bawah ini
class Pelajar extends Orang {
  constructor(nama, umur, namaSekolah)
  {
    super(nama, umur);
    this.namaSekolah = namaSekolah;
  }
  belajar()
  {
    return `${this.nama} belajar di ${this.namaSekolah}`;
  }
}

const user = new Pelajar("Terra", 17, "Skilvul");
console.log(user);
console.log(user.tidur());
console.log(user.makan());
console.log(user.belajar());


// POLYMORPHISM
/*
1.Buatlah class bernama Harimau yang merupakan turunan dari class Hewan.

2.Pada class Harimau lakukan overriding pada method makan() yang akan mengembalikan teks string `${this.nama} makan daging`.

3.Di luar blok kode class Harimau, buatlah instance objek bernama harimauSumatra dari class Harimau dengan argumen string Harimau Sumatra. Lakukan console.log() pada method makan() yang dimiliki oleh objek harimauSumatra. Cek tab Console untuk melihat data.

*/
class Hewan {
  constructor(nama) {
    this.nama = nama;
  }

  makan() {
    return "Hewan sedang makan";
  }
}

// Buat kode kamu di bawah ini

class Harimau extends Hewan {
  constructor(nama) {
    super(nama);
  }

  makan() {
    return `${this.nama} makan daging`
  }
}

const harimauSumatra = new Harimau("Harimau Sumatra");
console.log(harimauSumatra);
console.log(harimauSumatra.makan());




// PRAKTEK 8

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
