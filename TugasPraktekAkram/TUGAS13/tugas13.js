// TUGAS 13 PROMISE MUHAMMAD AKRAM ALMAIR
// SOAL 1

const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data Fetched!");
  }, 3000);
});

fetchData
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// SOAL 2
const numbers = [3, 7, 1, 6];
const checkNumber = new Promise((resolve, reject) => {
  if (numbers[1] >= 5) {
    resolve(numbers[1]);
  } else {
    reject("Number is to low!");
  }
});

checkNumber
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// SOAL 3
const fetchStep1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Step 1 Complete!");
  }, 1000);
});

const fetchStep2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Step 2 Complete!");
  }, 2000);
});

const fetchStep3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Step 3 Complete!");
  }, 3000);
});

Promise.all([fetchStep1, fetchStep2, fetchStep3])
  .then((result) => {
    console.log(result);
  })
  .then((result) => {
    console.log("All Steps Completed!");
  })
  .catch((error) => {
    console.log(error);
  });

// SOAL 4
const delay = 2;
const simulateTask = new Promise((resolve, reject) => {
  if (delay <= 2) {
    resolve("Task Success!");
  } else {
    reject("Task Failed!");
  }
});

simulateTask
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Task Completed!");
  });

// SOAL 5

const fetchDataA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data A");
  }, 1000);
});

const fetchDataB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data B");
  }, 2000);
});

Promise.all([fetchDataA, fetchDataB])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
