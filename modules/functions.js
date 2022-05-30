import { booksData, Book } from './bookList.js';

export const generateId = (length = 10) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

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
    return new Book(title, author);
  }
  return false;
};