const players = ['Ronaldo', 'Messi' ,'Mbappe']
console.log(players[0])
console.log(players[2])


// delete example
const numbers = [1, 2, 3, 4, 5];
delete numbers[2];
console.log(numbers); // [1, 2, undefined, 4, 5]

// splice example
const fruits = ['apple', 'banana', 'cherry', 'date'];
fruits.splice(1, 1); // remove one element at index 1
console.log(fruits); // ['apple', 'cherry', 'date']
