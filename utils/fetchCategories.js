import getMovie from './displayMovies.js';
import displaYcategories from './categories.js';

//searchCategories
const categoryList = document.querySelectorAll('.categoryList');

const movie = document.querySelector('.search-section__results--movies ');

const fecthCategories = categoryList.forEach((categoryEl) => {
  categoryEl.addEventListener('click', (e) => {
    const categoryID = e.target.dataset.id;
    localStorage.setItem('movieGenres', categoryID);
  });
});
export default fecthCategories;
