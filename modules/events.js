import { booksData } from './bookList.js';
import { displayBooks } from './functions.js';
import { initialData } from './data.js';

export const updateLocalStorage = () => {
  booksData.data = JSON.parse(localStorage.getItem('myLocalData' || '[]'));
  if (booksData.data === null) {
    booksData.data = initialData;
    localStorage.setItem('myLocalData', JSON.stringify(initialData));
    return;
  }

  booksData.data.forEach((book) => displayBooks(book));
};

export const routeUser = (event, arr) => {
  const listItems = document.querySelectorAll('.nav-list-item');
  console.log(event.target);
  const targetIndex = Array.from(listItems).indexOf(event.target);
  const targetSection = arr[targetIndex];
  const displayedSection = arr.filter(
    (clickedSection) => !clickedSection.classList.contains('d-none')
  );
  if (displayedSection[0] === targetSection) {
    return;
  }
  targetSection.classList.toggle('d-none');
  displayedSection[0].classList.toggle('d-none');
};
