import { generateId } from './functions.js';

export class BookList {
  constructor() {
    this.data = [];
  }

  // add book
  addBook(book) {
    this.data.push(book);
    title.value = '';
    author.value = '';
    localStorage.setItem('myLocalData', JSON.stringify(this.data));
  }

  removeBook(id) {
    const book = document.getElementById(id);
    book.remove();
    this.data = this.data.filter((book) => book.id !== id);
    localStorage.setItem('myLocalData', JSON.stringify(this.data));
  }
}

export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = generateId();
  }
}

export const booksData = new BookList();
