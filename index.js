const myLibrary = [];

const table = document.getElementById("table");
const addBookForm = document.getElementById("add-book");

function updateTable() {
  table.innerHTML =
    "<tr><th>Title</th><th>Author</th><th>Pages</th><th>Is read?</th></tr>";
  if (myLibrary.length != 0) {
    const tableContent = document.createDocumentFragment();
    myLibrary.forEach((value) => {
      const tableRow = document.createElement("tr");
      const title = document.createElement("td");
      const author = document.createElement("td");
      const pages = document.createElement("td");
      const isRead = document.createElement("td");
      title.innerText = value.title;
      tableRow.appendChild(title);
      author.innerText = value.author;
      tableRow.appendChild(author);
      pages.innerText = value.pages;
      tableRow.appendChild(pages);
      isRead.innerText = value.isRead ? "Yes" : "No";
      tableRow.appendChild(isRead);
      tableContent.appendChild(tableRow);
    });
    table.appendChild(tableContent);
  }
}

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.info = function () {
    console.log(
      this.title,
      ", " + this.author,
      ", " + this.pages + " pages",
      isRead ? "Not read" : "Read"
    );
  };
}

function addBookToLibrary(title, author, pages, isRead) {
  myLibrary.push(new Book(title, author, pages, isRead));
  updateTable();
}

myLibrary[0] = new Book(
  "Harry Potter and the Philosopher's Stone",
  "J. K. Rowling",
  223,
  true
);

updateTable();

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const isRead = document.getElementById("is-read");

addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary(title.value, author.value, pages.value, isRead.checked);
  addBookForm.reset();
});
