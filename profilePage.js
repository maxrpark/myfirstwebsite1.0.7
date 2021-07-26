import sidebar from './utils/sidebar.js';
import getId from './utils/getMovieId.js';
import getMovie from './utils/displayMovies.js';
import search from './utils/search.js';
import displaYcategories from './utils/categories.js';
import fecthCategories from './utils/fetchCategories.js';
import topSearchForm from './utils/searchNavbar.js';
import heroImg from './utils/profile/heroImg.js';
import profileImgs from './utils/profile/profileImg.js';
import fetchSingleMovie from './utils/singleMovie/fechSingleMovie.js';

const editBtn = document.querySelector('.edit-btn');
const editProfile = document.querySelector('.edit-profile');
const nameOfUser = document.querySelector('.name-of-user');
const aboutUser = document.querySelector('.user-about');
const editAbout = document.getElementById('edit-user-about');
const editName = document.getElementById('edit-user-name');

editBtn.addEventListener('click', () =>
  editProfile.classList.toggle('edit-profile-show')
);

editProfile.addEventListener('submit', (e) => {
  // e.preventDefault();
  const aboutValue = editAbout.value;
  const nameValue = editName.value;

  console.log(nameValue.length);

  if (nameValue.length > 0) {
    localStorage.setItem('name', nameValue);
  }
  if (aboutValue.length > 0) {
    localStorage.setItem('about', aboutValue);
  }
});

const name = localStorage.getItem('name');
if (name) {
  nameOfUser.textContent = name;
}

const about = localStorage.getItem('about');

if (about) {
  aboutUser.textContent = about;
}

// MOVIES LIST
const mymovies = JSON.parse(localStorage.getItem('movieInfo'));

const movieList = document.querySelector('.myMovies');
const removeBtn = document.querySelector('.remove-list');

if (mymovies) {
  const myMovieList = mymovies
    .map((movie) => {
      const { name, id } = movie;
      return ` <div class="myMovies__single" data-id="${id}">
    <a href="singleMovie.html" class="movie-name" data-id="${id}">${name}</a>
    <i class="fas fa-times remove-list"></i>
  </div>`;
    })
    .join('');
  movieList.innerHTML = myMovieList;
}

movieList.addEventListener('click', (e) => {
  const dataID = e.target.dataset.id;
  localStorage.setItem('movie', dataID);
});

// REMOVE MOVIE
movieList.addEventListener('click', (e) => {
  const dataID = e.target.dataset.id;
  localStorage.setItem('movie', dataID);
  const removeBtn = e.target;

  if (removeBtn.classList.contains('remove-list')) {
    const movieListID = removeBtn.parentElement.dataset.id;
    const movieContainer = removeBtn.parentElement;
    console.log(movieContainer);
    function removeMovieFromList() {
      let items = getLocalStorage();
      items = items.filter(function (item) {
        if (item.id !== movieListID) {
          return item;
        }
      });
      movieContainer.style.display = 'none';

      localStorage.setItem('movieInfo', JSON.stringify(items));
    }
    removeMovieFromList();
  }
});

// MAIN

function getLocalStorage() {
  return localStorage.getItem('movieInfo')
    ? JSON.parse(localStorage.getItem('movieInfo'))
    : [];
}

const deleteProfile = document.querySelector('.clear');
deleteProfile.addEventListener('click', () => {
  console.log(deleteProfile);
  localStorage.clear();
  location.reload();
});
