const imgPoster = 'https://image.tmdb.org/t/p/w500/';
const movieTitle = document.querySelector('.movieTitle');
const movieTagline = document.querySelector('.movieTagline');
const movieOverview = document.querySelector('.movieOverview');
const recommendedBtn = document.querySelector('.recommendedBtn');
const movieImg = document.querySelector('.movie__recomended-img');

const RECOMMENDED_URL =
  'https://api.themoviedb.org/3/movie/157336?api_key=0af6aa8586b7793971eae913907523e7';

async function bestMovie() {
  const resp = await fetch(RECOMMENDED_URL);
  const data = await resp.json();
  movieTitle.textContent = data.title;
  movieTagline.textContent = `"${data.tagline}"`;
  movieOverview.textContent = data.overview;
  movieImg.src = imgPoster + data.poster_path;
  const id = data.id;

  recommendedBtn.addEventListener('click', (e) => {
    const dataID = id;
    localStorage.setItem('movie', dataID);
  });
}
bestMovie();

export default bestMovie;
