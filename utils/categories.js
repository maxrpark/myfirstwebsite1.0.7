// Categories

const categoryList = document.querySelectorAll('.categoryList');

const API_KEY = 'api_key=0af6aa8586b7793971eae913907523e7';
const categoryPath = 'https://api.themoviedb.org/3/genre/movie/list?';
const categorylanguage = '&language=en-US';

const CATEGORIES_URL = categoryPath + API_KEY + categorylanguage;

async function displayCategories() {
  const resp = await fetch(CATEGORIES_URL);
  const data = await resp.json();

  let categories = data.genres;
  let categoriesNames = categories
    .map((category) => {
      const name = category.name;
      const id = category.id;
      return `



<a href="search.html" data-id="${id}" >${name}</a>
</div>`;
    })
    .join('');
  categoryList.forEach((categoryEl) => {
    categoryEl.innerHTML = categoriesNames;
  });
}

displayCategories();

export default displayCategories;
