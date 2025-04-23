class Library {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  addBooks(books) {
    this.books.push(...books);
  }
  removeBook(book) {
    this.books = this.books.filter((b) => b !== book);
  }
  listBooks() {
    this.books.forEach((book) => {
      console.log(book.info());
    });
  }
}

class Book {
  constructor(name, isbn, price, author) {
    this.name = name;
    this.isbn = isbn;
    this.price = price;
    this.author = author;
    this.readStatus = false;
  }
  info() {
    console.log(
      `${this.name} is written by ${
        this.author
      }. It is available on various online platforms. This book price is ${
        this.price
      }. You have ${
        this.readStatus ? "already read this book." : "not read this book."
      }`
    );
  }
  read() {
    this.readStatus = !this.readStatus;
  }
}

const book1 = new Book("Sex is Life", "69696969", "69", "Rahul Kashyap");
const book2 = new Book("Sex is Money", "69696969", "69", "Rahul Kashyap");
const book3 = new Book("Sex is Love", "69696969", "69", "Rahul Kashyap");
const book4 = new Book("Sex is Death", "69696969", "69", "Rahul Kashyap");
const delhiLibrary = new Library();
delhiLibrary.addBook(book1);
delhiLibrary.addBook(book2);
delhiLibrary.addBook(book3);
delhiLibrary.addBook(book4);

delhiLibrary.removeBook(book2);
