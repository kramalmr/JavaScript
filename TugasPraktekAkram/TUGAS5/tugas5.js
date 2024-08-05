// soal 1
function soal1() {
  let hari = prompt("Masukkan Nama Hari");
  switch (hari) {
    case "Minggu":
      alert("Weekend");
      break;
    case "Sabtu":
      alert("Weekend");
      break;
    case "Senin":
      alert("Weekday");
      break;
    case "Selasa":
      alert("Weekday");
      break;
    case "Rabu":
      alert("Weekday");
      break;
    case "Kamis":
      alert("Weekday");
      break;
    case "Jumat":
      alert("Weekday");
      break;
    default:
      alert("???");
      break;
  }
}

// soal 2

function soal2() {
  for (let i = 1; i <= 15; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// soal 3

function soal3() {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

// soal 4

function soal4() {
  for (let i = 1; i <= 15; i++) {
    if (i % 3 == 0) {
      console.log("Multiple of 3");
    } else {
      console.log(i);
    }
  }
}
