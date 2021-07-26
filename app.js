import getMovie from './utils/displayMovies.js';
import displaModal from './utils/modal.js';
import bestMOvie from './utils/recomended.js';
import sidebar from './utils/sidebar.js';
import getId from './utils/getMovieId.js';
import year from './utils/displayYear.js';
import displaYcategories from './utils/categories.js';
import fecthCategories from './utils/fetchCategories.js';

const movieMain = document.querySelector('.movie__best-movies');
const moviefamily = document.querySelector('.movie__family');
const adventure = document.querySelector('.movie__adventure');
const horror = document.querySelector('.movie__horror');

const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?';
const API_KEY = 'api_key=0af6aa8586b7793971eae913907523e7';

// POPULARITY
const polularity = 'sort_by=popularity.desc&';
const PopularMOVIES = BASE_URL + polularity + API_KEY + '&page=';

// GENRES
const genres = '&with_genres=';
const URL_GENRES = BASE_URL + API_KEY + genres;

function displayMovie() {
  getMovie(PopularMOVIES, movieMain);
  getMovie(URL_GENRES + 10751, moviefamily);
  getMovie(URL_GENRES + 12, adventure);
  getMovie(URL_GENRES + 27, horror);
}
displayMovie();
getId();
