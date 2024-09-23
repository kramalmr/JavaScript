// SOAL 1

function helloWorld() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}

async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}

messages();

// SOAL 2
function ambilDataUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      console.log(users);
    });
};

ambilDataUser()