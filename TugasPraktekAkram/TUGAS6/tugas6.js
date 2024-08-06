//TUGAS 6 MUHAMMAD AKRAM ALMAIR

// SOAL 1
let identity = ["Akram", 15, "Tangsel"];
console.log(identity[1]);

// SOAL 2
identity[0] = "Almair";
console.log(identity[0]);

// SOAL 3
identity.splice(1, 1);
console.log(identity);

// SOAL 4
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = array1.concat(array2);
console.log(array3);

// SOAL 5
console.log(identity.indexOf("Tangsel"));

// SOAL 6

const numbers = [34, 7, 23, 32, 5];
function compareNumbers(a, b) {
  return a - b;
}

numbers.sort(compareNumbers);
console.log(numbers);

// SOAL 7
console.log(numbers.length);
