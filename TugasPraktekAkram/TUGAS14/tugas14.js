// TUGAS 14 MUHAMMAD AKRAM ALMAIR
// SOAL 1

const simulateDelay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Delay Finished!");
    }, 2000);
  });
};

const showResult = async () => {
  const result = await simulateDelay();
  console.log(result);
};

showResult();

// SOAL 2
async function calculateDivision(num1, num2) {
  try {
    if (num1 === 0 || num2 === 0) {
      throw new Error("Cannot divide by zero!");
    } else {
      const result = num1 / num2;
      console.log(result);
    }
  } catch (error) {
    console.log(error.message);
  }
}

calculateDivision(10, 0);
calculateDivision(10, 5);

// SOAL 3

function Task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 1 Complete!");
    }, 1000);
  });
}

function Task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 2 Complete!");
    }, 2000);
  });
}

const performTask = async () => {
  const task1 = await Task1();
  console.log(task1);
  const task2 = await Task2();
  console.log(task2);
};

performTask();

// SOAL 4
const getUserProfile = async () => {
  try {
    const fetchData = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const userProfile = await fetchData.json();
    if (userProfile.name === "Leanne Graham") {
      console.log("User is Leanne Graham");
    } else {
      throw new Error("User is not Leanne Graham");
    }
  } catch (error) {
    console.log(error.message);
  }
};

getUserProfile();

// SOAL 5

const getPostDetails = async () => {
  try {
    const fetchData = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const postDetails = await fetchData.json();
    if (!postDetails == 200) {
      throw new Error("Failed to fetch post");
    } else {
      console.log(postDetails.title);
    }
  } catch (error) {
    console.log(error.message);
  }
};

getPostDetails();

// SOAL 6

const checkPostAvailibility = async () => {
  try {
    const fetchData = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const postDetails = await fetchData.json();
    if (!postDetails == 200) {
      throw new Error("Failed to fetch post");
    } else {
      if (postDetails.userId > 5) {
        console.log("Post is available for user IDs greater than 5");
      } else {
        console.log("Post is not available for user greater than 5");
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

checkPostAvailibility();