let completeBooks = [];
let incompleteBooks = [];

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
  });

  loadBooks();
  renderBooks();
});
function addBook() {
  const title = document.getElementById("bookFormTitle").value;
  const author = document.getElementById("bookFormAuthor").value;
  const year = parseInt(document.getElementById("bookFormYear").value);
  const isComplete = document.getElementById("bookFormIsComplete").checked;

  const book = { id: generateId(), title, author, year, isComplete };
  isComplete ? completeBooks.push(book) : incompleteBooks.push(book);

  console.log(incompleteBooks);

  renderBooks();
  clearForm();
}

function generateId() {
  return +new Date();
}

function clearForm() {
  document.getElementById("bookFormTitle").value = "";
  document.getElementById("bookFormAuthor").value = "";
  document.getElementById("bookFormYear").value = "";
  document.getElementById("bookFormIsComplete").checked = false;
}

function renderBooks() {
  const incompleteList = document.getElementById("bookShelfInnerIncomplete");
  const completeList = document.getElementById("bookShelfInnerCompleted");
  const incompleteEmpty = document.getElementById("textEmptyIncomplete");
  const completeEmpty = document.getElementById("textEmptyCompleted");
  incompleteList.innerHTML = "";
  completeList.innerHTML = "";
  for (const book of incompleteBooks) {
    const element = createBook(book);
    incompleteList.appendChild(element);
  }
  for (const book of completeBooks) {
    const element = createBook(book);
    completeList.appendChild(element);
  }

  if (incompleteList.innerHTML === "") {
    incompleteEmpty.style.display = "block";
  } else {
    incompleteEmpty.style.display = "none";
  }
  if (completeList.innerHTML === "") {
    completeEmpty.style.display = "block";
  } else {
    completeEmpty.style.display = "none";
  }

  saveBooks();
}

function createBook(book) {
  const { id, title, author, year, isComplete } = book;

  const textContainer = document.createElement("div");
  textContainer.classList.add("bookItem");
  textContainer.setAttribute("id", id);
  textContainer.setAttribute("data-bookid", "123123123");
  textContainer.setAttribute("data-testid", "bookItem");

  const textTitle = document.createElement("h3");
  textTitle.innerText = title;
  textTitle.setAttribute("data-testid", "bookItemTitle");

  const textAuthor = document.createElement("p");
  textAuthor.innerText = `Email: ${author}`;
  textAuthor.setAttribute("data-testid", "bookItemAuthor");

  const textYear = document.createElement("p");
  textYear.innerText = `Umur: ${year}`;
  textYear.setAttribute("data-testid", "bookItemYear");

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("action");

  const isCompleteButton = document.createElement("button");
  isCompleteButton.innerText = isComplete ? "Pindahkan ke Rak Awal" : "Pindahkan ke Rak Alternatif";
  isCompleteButton.setAttribute("data-testid", "bookItemIsCompleteButton");
  isCompleteButton.classList.add("complete");

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Hapus User";
  deleteButton.setAttribute("data-testid", "bookItemDeleteButton");
  deleteButton.classList.add("delete");

  isCompleteButton.addEventListener("click", function () {
    book.isComplete = !isComplete; // Update the actual book object
    isCompleteButton.innerText = book.isComplete ? "Pindahkan ke Rak Awal" : "Pindahkan ke Rak Alternatif";

    if (book.isComplete) {
      completeBooks.push(book);
      incompleteBooks = incompleteBooks.filter((b) => b.id !== id);
    } else {
      incompleteBooks.push(book);
      completeBooks = completeBooks.filter((b) => b.id !== id);
    }

    renderBooks();
  });

  deleteButton.addEventListener("click", function () {
    if (book.isComplete) {
      completeBooks = completeBooks.filter((b) => b.id !== id);
    } else {
      incompleteBooks = incompleteBooks.filter((b) => b.id !== id);
    }

    alert(`User dengan ID ${id} dan Nama ${title} telah dihapus.`);
    renderBooks();
  });

  buttonContainer.append(isCompleteButton, deleteButton);
  textContainer.append(textTitle, textAuthor, textYear, buttonContainer);

  return textContainer;
}


function toggleCheck() {
    const buttonSubmitText = document.getElementById("bookFormSubmitTextSpan")
  if (document.getElementById("bookFormIsComplete").checked) {
    buttonSubmitText.innerText = "Alternatif";
  } else {
    buttonSubmitText.innerText = "Awal";
  }
}

function saveBooks(){
  localStorage.setItem("incompleteBooks", JSON.stringify(incompleteBooks));
  localStorage.setItem("completeBooks", JSON.stringify(completeBooks));
}

function loadBooks() {
  if (localStorage.getItem("incompleteBooks")) {
    incompleteBooks = JSON.parse(localStorage.getItem("incompleteBooks"));
  }
  if (localStorage.getItem("completeBooks")) {
    completeBooks = JSON.parse(localStorage.getItem("completeBooks"));
  }
}