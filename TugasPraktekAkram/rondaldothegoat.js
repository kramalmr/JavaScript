const players = ['Ronaldo', 'Messi' ,'Mbappe']
console.log(players[0])
console.log(players[2])
players[2] = 'Cristiano'
console.log(players)


// delete example
const numbers = [1, 2, 3, 4, 5];
delete numbers[2];
console.log(numbers); // [1, 2, undefined, 4, 5]

// splice example
const fruits = ['apple', 'banana', 'cherry', 'date'];
fruits.splice(1, 1); // remove one element at index 1
console.log(fruits); // ['apple', 'cherry', 'date']

const car = {
    name : "bmw",
    type: {
        color : "black",
        series : "2001"
    },
}

console.log(car.series)




function apake() {
    var 1 = 1;
    let 2 = 2;
}
if (1 = 1) {
    var 3 = 3;
    let 4 = 4;
}
console.log(1)
console.log(2)
console.log(3)  
console.log(4)