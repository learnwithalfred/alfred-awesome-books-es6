export class BookList {
  constructor() {
    this.data = [];
  }

  // add book
  addBook(book) {
    this.data.push(book);
    localStorage.setItem('myLocalData', JSON.stringify(this.data));
  }

  removeBook(id) {
    const book = document.getElementById(id);
    book.remove();
    this.data = this.data.filter((book) => book.id !== id);
    localStorage.setItem('myLocalData', JSON.stringify(this.data));
  }
}

export const booksData = new BookList();
