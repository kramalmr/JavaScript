// SOAL 1
// NOMOR 1
const person = {
  name: "Akram",
  age: 15,
  city: "Tangsel",
};
// NOMOR 2
console.log(person.age);
console.log(person["age"]);

person.age = person.age + 5;
console.log(person.age);
person["age"] = person["age"] + 5;
console.log(person["age"]);
// NOMOR 3
delete person.city;
console.log(person);

// SOAL 2: Destructuring Object
// NOMOR 1. Destructuring dengan Nama Variabel yang Sama
const { name, age } = person;
console.log(name);
console.log(age);

// NOMOR 2. Destructuring dengan Nama Variabel yang Berbeda
const { name: userName, age: userAge } = person;
console.log(userName);
console.log(userAge);

// SOAL 3: Class
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getDetails() {
    return `This is ${this.title}, written by ${this.author}`;
  };
  
  updateAuthor(newAuthor) {
    this.author = newAuthor;
  }

}

const objekBook = new Book("JavaScript Essentials", "Jane Doe");
console.log(objekBook.getDetails());

const myBook = new Book("Hujan", "Tere Liye");
myBook.updateAuthor("Muhammad Akram")
console.log(myBook.getDetails());
