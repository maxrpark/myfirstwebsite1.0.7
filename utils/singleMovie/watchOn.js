// WATCH ON
const ID = localStorage.getItem('movie');

const BASE_URL_2 = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'api_key=0af6aa8586b7793971eae913907523e7';
const movieProviders = '/watch/providers';

const movieLink = document.querySelector('.watch-on');

async function movieProvider() {
  const resp = await fetch(BASE_URL_2 + ID + movieProviders + '?' + API_KEY);
  const data = await resp.json();

  const providerUS = data.results.US;
  const { link } = providerUS;

  movieLink.innerHTML = ` <a href="${link}" target="_blank" class="watch-on-link"> Watch on <span class="watch-on-link-span">TMDB</span></a>`;
}

movieProvider();

export default movieProvider;
