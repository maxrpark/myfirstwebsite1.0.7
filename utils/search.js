import getMovie from './displayMovies.js';

// SEARCH
const form = document.querySelector('.form');
const search = document.querySelector('.form__search');

form.addEventListener('submit', (e) => {
  const value = search.value;
  localStorage.setItem('searchTerm', value);
});

export default search;
