const imgPoster = 'https://image.tmdb.org/t/p/w500/';
// MODAL
const modal = document.querySelector('.modal');
const modalDesc = document.querySelector('.modal__description');
const closeBtn = document.querySelector('.close-btn');

// URLS
const BASE_URL_2 = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'api_key=0af6aa8586b7793971eae913907523e7';

closeBtn.addEventListener('click', () =>
  modal.classList.remove('show-description')
);

function displaModal() {
  window.addEventListener('click', function (m) {
    const movieID = m.target.parentElement.parentElement.dataset.id;

    if (movieID) {
      const singleMovie = BASE_URL_2 + movieID + '?' + API_KEY;
      modal.classList.add('show-description');
      localStorage.setItem('movie', movieID);

      async function single() {
        const rest = await fetch(singleMovie);
        const data = await rest.json();

        const { title, poster_path: img, id, overview } = data;
        const genres = data.genres[0];
        const genresID = genres.id;

        localStorage.setItem('movieGenres', genresID);

        modalDesc.innerHTML = ` 
        
        <div class="modal-card"> 
        <div class="modal__container">
        <img src="${
          imgPoster + img
        }" class="modal__description--img" alt="${title}" />
        <div class="modal__movie--info">
          <h4>${title}</h4>
          <p>${overview.substring(0, 350)}...</p>
        </div>
        </div>
        <a class="btn movie__btn"  data-id="${id}" href="./singleMovie.html">Read More</a>
        </div> 
    `;
      }
      single();
    } else {
      return;
    }
  });
}
displaModal();
export default displaModal;
