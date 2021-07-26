const BASE_URL_2 = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'api_key=0af6aa8586b7793971eae913907523e7';

const imgPoster = 'https://image.tmdb.org/t/p/w500/';

// const ID = localStorage.getItem('movie');
const movieSection = document.querySelector('.movie-desc');

async function fetchSingleMovie(MOVIEID) {
  const rest = await fetch(BASE_URL_2 + MOVIEID + '?' + API_KEY);
  const data = await rest.json();
  const {
    title,
    poster_path: img,
    backdrop_path: background,
    overview,
    tagline,
    vote_average: rating,
    runtime,
    id,
  } = data;

  const genres = data.genres[0];
  const genero = genres.name;

  movieSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${
    imgPoster + background
  })`;
  movieSection.innerHTML = `
      
      <div class="container ">
      <i class="fas fa-bookmark mark" data-name="${title}" data-id="${id}"></i>
          <img src="${imgPoster + img}" class="img movie-desc__img" alt="" />
        </div>
        <div class="movie-desc__info">
          <div class="movie-desc__info-title">
            <h2>${title}</h2>
            <div class="movie-desc__info-title-details">
              <p>${genero}</p>
              <p>${runtime} min</p>
                <span class="movie-desc__rating-single ${ratingColor(rating)}"
            >${rating}</span
          >
            </div>

            <h3>"${tagline}"</h3>
          </div>
          <div class="movie-desc__info-overview">
            <p>
             ${overview}
            </p>
            
          </div>
        </div>
      
       
        
        `;
  document.title = `${title} || Movie Masters`;
}

function ratingColor(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 6) {
    return 'red';
  } else {
    return 'yellow';
  }
}

export default fetchSingleMovie;
