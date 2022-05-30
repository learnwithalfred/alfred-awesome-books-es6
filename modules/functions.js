import { booksData } from './bookList.js';
import Books from './book.js';

export const displayBooks = (book) => {
  const ul = document.querySelector('.book-list');
  const li = document.createElement('li');
  ul.classList.add('list-container');

  li.classList.add('list');
  li.setAttribute('id', book.id);
  li.innerText = `${book.title} by ${book.author}`;
  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove';
  removeBtn.addEventListener('click', () => booksData.removeBook(book.id));
  li.appendChild(removeBtn);
  ul.appendChild(li);
};

export const createBook = (title, author) => {
  if ((title, author)) {
    return new Books(title, author);
  }
  return false;
};
