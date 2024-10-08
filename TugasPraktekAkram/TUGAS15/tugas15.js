function soal1() {
    let num = prompt("Masukkan angka");
    if (num < 10) {
        alert("Your number is less than 10");
    } else if (num > 10) {
        alert("Your number is greater than 10");
    } else {
        alert("Your number is equal to 10");
    }
};

function soal2() {
    confirm("Pick Between OK and Cancel!")
        ? alert("You Picked OK!")
        : alert("You Picked Cancel!");
};

function soal3() {
    const name = prompt("What's your name?");
    if (name === null || name === "") {
        alert("You didn't enter your name!");
    } else {
        alert("Hello " + name + "!");
    }
};

function soal4() {
    alert("Welcome!")
    const confirmation = confirm("Do you want to enter your name?")
    if (confirmation) {
        const name = prompt("What's your name?");   
        if (name === null || name === "") {
            alert("Thank You!");
        } else {
            alert("Hello " + name + "!");
        }
    } else {
        alert("Thank You!")
    };
};