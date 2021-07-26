const imgPoster = 'https://image.tmdb.org/t/p/w500/';

// GET MOVIE
async function getMovie(url, section) {
  const resp = await fetch(url);
  const data = await resp.json();

  const movies = data.results;
  const info = movies
    .map((pelis) => {
      const { title, poster_path: img, id, vote_average: rating } = pelis;
      return `
      
      <div class="movie__single " data-id="${id}">
      <div>
        <img src="${
          imgPoster + img
        }" class="img-banner movie__single--img" alt="" />
        </div>
        <div class="movie__single-info">
          <h4>${title}</h4>
          <span class="movie__single-info--rating ${ratingColor(
            rating
          )}">${rating.toFixed(1)}</span>
        </div>
      </div>
      `;
    })
    .join('');
  section.innerHTML = info;
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

export default getMovie;
