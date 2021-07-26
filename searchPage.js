import search from './utils/search.js';
import getMovie from './utils/displayMovies.js';
import displaModal from './utils/modal.js';
import displaYcategories from './utils/categories.js';
import fecthCategories from './utils/fetchCategories.js';
import sidebar from './utils/sidebar.js';
import year from './utils/displayYear.js';

const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?';
const API_KEY = 'api_key=0af6aa8586b7793971eae913907523e7';

// GENRES
const genres = '&with_genres=';
const URL_GENRES = BASE_URL + API_KEY + genres;

// SEARCH

const searchPath = 'https://api.themoviedb.org/3/search/movie?';
const SEARCH_MOVIE = searchPath + API_KEY + '&query=';

const searchEl = localStorage.getItem('searchTerm');
const movie = document.querySelector('.search-section__results--movies ');

window.addEventListener('DOMContentLoaded', () => {
  if (searchEl && searchEl !== '') {
    getMovie(SEARCH_MOVIE + searchEl, movie);
    localStorage.clear('searchTerm');
  } else {
    const genresID = localStorage.getItem('movieGenres');
    getMovie(URL_GENRES + genresID, movie);
  }
});
