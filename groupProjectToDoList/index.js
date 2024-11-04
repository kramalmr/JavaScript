// TAB NAVIGATION
const allTasksButton = document.getElementById("allTasks");
const incompleteButton = document.getElementById("incomplete");
const completeButton = document.getElementById("complete");

let visibleTasks = "all";
function showAll() {
  allTasksButton.classList.remove("bg-white", "text-[#FE6902]");
  allTasksButton.classList.add("bg-[#FE6902]", "text-white");
  allTasksButton.innerHTML =
    "<b>All Tasks</b> <img class='w-5 ml-3' src='assets/note-alt.png' alt='' />";

  incompleteButton.classList.remove("bg-[#FE6902]", "text-white");
  incompleteButton.classList.add("bg-white", "text-[#FE6902]");
  incompleteButton.innerHTML =
    "Uncompleted <img class='w-5 ml-3' src='assets/hexagon-exclamation.png' alt='' />";

  completeButton.classList.remove("bg-[#FE6902]", "text-white");
  completeButton.classList.add("bg-white", "text-[#FE6902]");
  completeButton.innerHTML =
    "Completed <img class='w-5 ml-3' src='assets/octagon-check.png' alt='' />";

  visibleTasks = "all";
  sortTasks();
}

function showIncomplete() {
  allTasksButton.classList.remove("bg-[#FE6902]", "text-white");
  allTasksButton.classList.add("bg-white", "text-[#FE6902]");
  allTasksButton.innerHTML =
    "All Tasks <img class='w-5 ml-3' src='assets/note.png' alt='' />";

  incompleteButton.classList.remove("bg-white", "text-[#FE6902]");
  incompleteButton.classList.add("bg-[#FE6902]", "text-white");
  incompleteButton.innerHTML =
    "<b>Uncompleted</b> <img class='w-5 ml-3' src='assets/hexagon-exclamation-alt.png' alt='' />";

  completeButton.classList.remove("bg-[#FE6902]", "text-white");
  completeButton.classList.add("bg-white", "text-[#FE6902]");
  completeButton.innerHTML =
    "Completed <img class='w-5 ml-3' src='assets/octagon-check.png' alt='' />";

  visibleTasks = "incomplete";
  sortTasks();
}

function showComplete() {
  allTasksButton.classList.remove("bg-[#FE6902]", "text-white");
  allTasksButton.classList.add("bg-white", "text-[#FE6902]");
  allTasksButton.innerHTML =
    "All Tasks <img class='w-5 ml-3' src='assets/note.png' alt='' />";

  incompleteButton.classList.remove("bg-[#FE6902]", "text-white");
  incompleteButton.classList.add("bg-white", "text-[#FE6902]");
  incompleteButton.innerHTML =
    "Uncompleted <img class='w-5 ml-3' src='assets/hexagon-exclamation.png' alt='' />";

  completeButton.classList.remove("bg-white", "text-[#FE6902]");
  completeButton.classList.add("bg-[#FE6902]", "text-white");
  completeButton.innerHTML =
    "<b>Completed</b> <img class='w-5 ml-3' src='assets/octagon-check-alt.png' alt='' />";

  visibleTasks = "complete";
  sortTasks();
}
// NEW TASK

let idTask = 0;
const showTask = document.getElementById("showTask");
const newTask = document.getElementById("newTask");
document
  .getElementById("formNewTask")
  .addEventListener("submit", function (event) {
    const newTaskValue = document.getElementById("inputTask").value;
    const newDateValue = document.getElementById("inputDate").value;
    const createTask = document.createElement("div");
    const buttonClearTask = newTask.getElementsByClassName("buttonClearTask")[0];
    const buttonRestoreTask = newTask.getElementsByClassName("buttonRestoreTask")[0];
    const buttonDeleteTask = newTask.getElementsByClassName("buttonDeleteTask")[0];
    
    // newTask.style.removeProperty("display");
    createTask.removeAttribute("id");
    createTask.setAttribute("id", `task-${idTask}`);
    createTask.classList.add("tabTaskOuter");
    buttonClearTask.removeAttribute("id");
    buttonClearTask.setAttribute("onclick", `clearTask(${idTask})`);
    buttonRestoreTask.setAttribute("onclick", `restoreTask(${idTask})`);
    buttonDeleteTask.setAttribute("onclick", `deleteTask(${idTask})`);
    newTask.getElementsByClassName("textTask")[0].innerText = newTaskValue;
    newTask.getElementsByClassName("textDate")[0].innerText = newDateValue;
    createTask.style.display = "flex";
    createTask.classList.add("incomplete");
    createTask.appendChild(newTask.cloneNode(true));
    createTask.getElementsByClassName("tabTask")[0].style.removeProperty("display");

    if (newTaskValue !== "" && newDateValue !== "") {
      showTask.appendChild(createTask);
    } else {
      alert("Please complete the form");
    }

    idTask++;
    localStorage.setItem("idTask", idTask);
    sortTasks();
    event.preventDefault();
    document.getElementById("inputDate").value = "";
    document.getElementById("inputTask").value = "";

  });

function clearTask(id) {
  const task = document.getElementById(`task-${id}`);
  task.classList.add("completed");
  task.classList.remove("incomplete");
  task.getElementsByClassName("buttonClearTask")[0].style.display = "none";
  task.getElementsByClassName("buttonRestoreTask")[0].style.display = "inline";
  task.getElementsByClassName("buttonDeleteTask")[0].style.display = "inline";
  task.getElementsByClassName("textCompleted")[0].style.display = "inline";
  sortTasks();
  console.log("Task completed:", task);
}

function restoreTask(id) {
  const task = document.getElementById(`task-${id}`);
  task.classList.add("incomplete");
  task.classList.remove("completed");
  task.getElementsByClassName("buttonClearTask")[0].style.display = "inline";
  task.getElementsByClassName("buttonRestoreTask")[0].style.display = "none";
  task.getElementsByClassName("buttonDeleteTask")[0].style.display = "none";
  task.getElementsByClassName("textCompleted")[0].style.display = "none";
  sortTasks();
  console.log("Task restored:", task);
}

function deleteTask(id) {
  const task = document.getElementById(`task-${id}`);
  task.remove()
  sortTasks();
  console.log("Task deleted:", task);
}
// COMPLETE TASK

// SORT TASK
function sortTasks() {
  const allTasks = showTask.querySelectorAll(".tabTaskOuter");
  const incompleteTasks = showTask.querySelectorAll(".incomplete");
  const completeTasks = showTask.querySelectorAll(".completed");

  if (visibleTasks === "all") {
    allTasks.forEach((task) => {
      task.style.display = "flex";
    });
  } else if (visibleTasks === "incomplete") {
    incompleteTasks.forEach((task) => {
      task.style.display = "flex";
    });
    completeTasks.forEach((task) => {
      task.style.display = "none";
    });
  } else {
    completeTasks.forEach((task) => {
      task.style.display = "flex";
    });
    incompleteTasks.forEach((task) => {
      task.style.display = "none";
    });
  }
}