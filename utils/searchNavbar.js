// SEARCH FORM

const topSearchForm = document.querySelector('.form-top');
const searchIcon = document.querySelector('.search-icon');

const topSearch = searchIcon.addEventListener('click', () => {
  topSearchForm.classList.toggle('show-search-form');
});

export default topSearch;
