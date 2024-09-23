// SOAL 1

function printMessagges() {
    console.log("Mulai");
    setTimeout(() => {
        console.log("Selesai");
    }, 2000);
}

printMessagges()

// SOAL 2

function printEverySecond() {
    let i = 0
    let printInterval = setInterval(() => {
        console.log("Hello, World!")
        i++
        if (i === 5) {
            clearInterval(printInterval);
        }
    }, 1000);
}

printEverySecond()

// SOAL 3

function greet(name, callback) {
    console.log(`Halo, ${name}`);
    setTimeout(callback, 1000);
};

function sayGoodbye() {
    console.log("Goodbye!")
};

greet("Akram", sayGoodbye);

// SOAL 4

function performTasks() {
    console.log("Tugas 1");
    setTimeout(() => {
        console.log("Tugas 2");
        setTimeout(() => {
            console.log("Tugas 3");
        }, 1000)
    }, 3000)
};

performTasks();

// SOAL 5

function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message + " " + delay + " " +"milliseconds");
    }, delay);
};

delayedMessage("Hello after", 2000)
