import sidebar from './utils/sidebar.js';
import fetchSingleMovie from './utils/singleMovie/fechSingleMovie.js';
import getId from './utils/getMovieId.js';
import getMovie from './utils/displayMovies.js';
import displaModal from './utils/modal.js';
import displaYcategories from './utils/categories.js';
import fecthCategories from './utils/fetchCategories.js';
import search from './utils/search.js';
import movieProvider from './utils/singleMovie/watchOn.js';
import showReviews from './utils/singleMovie/showReviews.js';
import submitReview from './utils/singleMovie/submitReview.js';
import topSearchForm from './utils/searchNavbar.js';

const API_KEY = 'api_key=0af6aa8586b7793971eae913907523e7';

const BASE_URL_2 = 'https://api.themoviedb.org/3/movie/';
const similarPath = '&language=en-US&page=1';

const ID = localStorage.getItem('movie');
const getSimilarMovie = BASE_URL_2 + ID + '/similar?' + API_KEY + similarPath;
const similar = document.querySelector('.movie__similar');

getMovie(getSimilarMovie, similar);

// DISPLAY SINGLE MOVIE

window.addEventListener('DOMContentLoaded', function () {
  fetchSingleMovie(ID);
});

// SIMILAR MOVIE

// SHOW ARROW REVIEWS
const arrowUp = document.getElementById('up');
const arrowdown = document.getElementById('down');
const reviewSection = document.querySelector('.dinamic-reviews');
const reviewSectionTitle = document.querySelector('.dinamic-review--title');

arrowUp.addEventListener('click', () => {
  reviewSection.classList.remove('show-reviews');
  reviewSectionTitle.textContent = 'Show Reviews';
  arrowUp.style.display = 'none';
  arrowdown.style.display = 'block';
});
arrowdown.addEventListener('click', () => {
  reviewSection.classList.add('show-reviews');
  reviewSectionTitle.textContent = 'Hide Reviews';
  arrowUp.style.display = 'block';
  arrowdown.style.display = 'none';
});

const movieSection = document.querySelector('.movie-desc');

movieSection.addEventListener('click', (e) => {
  const movieMark = e.target;

  if (movieMark.classList.contains('mark')) {
    movieMark.classList.toggle('mark-active');
    let favMovie = movieMark.dataset.id;
    let favName = movieMark.dataset.name;

    if (movieMark.classList.contains('mark-active')) {
      function addMyMovie(id, name) {
        const myMovie = { id: favMovie, name: favName };
        let items = localStorage.getItem('movieInfo')
          ? JSON.parse(localStorage.getItem('movieInfo'))
          : [];

        items.push(myMovie);

        localStorage.setItem('movieInfo', JSON.stringify(items));
      }
      addMyMovie();
    } else {
      // Remove
      function removeMovie(id) {
        let items = getLocalStorage();
        items = items.filter(function (item) {
          if (item.id !== favMovie) {
            return item;
          }
        });
        movieMark.classList.remove('mark-active');
        localStorage.setItem('movieInfo', JSON.stringify(items));
        movieMark.classList.remove('mark-active');
        movieSection.classList.remove('movie-show');
      }
      removeMovie();
    }

    // MAIN

    function getLocalStorage() {
      return localStorage.getItem('movieInfo')
        ? JSON.parse(localStorage.getItem('movieInfo'))
        : [];
    }
  }
});
const mymovies = JSON.parse(localStorage.getItem('movieInfo'));

mymovies.forEach((movie) => {
  const { id } = movie;

  if (id === ID) {
    movieSection.classList.add('movie-show');
  }
});
