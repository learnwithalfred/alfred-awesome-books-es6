import { initialData } from './modules/data.js';
import { routeUser } from './modules/events.js';
import { displayBooks } from './modules/functions.js';
import { createBook } from './modules/functions.js';
import { booksData } from './modules/bookList.js';

const form = document.querySelector('#form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const bookListSection = document.querySelector('#book-list-section');
const formSection = document.querySelector('#form-section');
const contactInfoSection = document.querySelector('#contact-info-section');
const booksRoute = document.querySelector('#books-route');
const addNewRoute = document.querySelector('#add-new-route');
const contactRoute = document.querySelector('#contact-route');
const date = document.querySelector('.date');
const sections = [bookListSection, formSection, contactInfoSection];


window.onload = () => {
  booksData.data = JSON.parse(localStorage.getItem('myLocalData' || '[]'));
  if (booksData.data === null) {
    booksData.data = initialData;
    localStorage.setItem('myLocalData', JSON.stringify(initialData));
    return;
  }

  booksData.data.forEach((book) => displayBooks(book));
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newBook = createBook(title.value, author.value);
  booksData.addBook(newBook);
  displayBooks(newBook);
  bookListSection.classList.remove('d-none');
  formSection.classList.add('d-none');
  contactInfoSection.classList.add('d-none');
});

formSection.classList.add('d-none');
contactInfoSection.classList.add('d-none');
booksRoute.addEventListener('click', (event) => routeUser(event, sections));
addNewRoute.addEventListener('click', (event) => routeUser(event, sections));
contactRoute.addEventListener('click', (event) => routeUser(event, sections));

