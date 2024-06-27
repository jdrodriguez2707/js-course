// Exercise: Stack of books

const bookStack = [];

alert("Stack of books\nHere you can add, remove and look for books");

let option;
do {
  option = prompt(
    "Choose an option\n1. Add a book\n2. Remove the last book\n3. Show all books\n0. Exit"
  );
  switch (option) {
    case "1":
      const bookName = prompt("Type the name of the book:");
      addBook(bookName);
      break;
    case "2":
      removeBook();
      break;
    case "3":
      displayStackOfBooks();
      break;
    case "0":
      alert("See ya!");
      break;
    default:
      alert("Please, choose a correct option.");
  }
} while (option !== "0");

function addBook(book) {
  bookStack.push(book);
  alert(`The book ${book} was added successfully.`);
}

function removeBook() {
  if (bookStack.length > 0) {
    const removedBook = bookStack.pop();
    alert(`The book ${removedBook} was removed successfully.`);
  } else {
    alert(`There aren't any books to remove.`);
  }
}

function displayStackOfBooks() {
  if (bookStack.length > 0) {
    let message = "Stack of books\n";
    bookStack.forEach((book, index) => {
      message += `${index + 1}. ${book}\n`;
    });
    alert(message);
  } else {
    alert(`There aren't any books to show.`);
  }
}
