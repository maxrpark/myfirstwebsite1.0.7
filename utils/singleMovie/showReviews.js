// show Reviews

const BASE_URL_2 = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'api_key=0af6aa8586b7793971eae913907523e7';
const reviewPath = '/reviews?';
const reviewLanguage = '&language=en-US&page=1?';

const dinamicsReviews = document.querySelector('.dinamic-reviews');
const imgPoster = 'https://image.tmdb.org/t/p/w500/';

const ID = localStorage.getItem('movie');

async function showReviews() {
  const resp = await fetch(
    BASE_URL_2 + ID + reviewPath + API_KEY + reviewLanguage
  );
  const data = await resp.json();

  const reviewsList = data.results;

  const reviews = reviewsList
    .map((review) => {
      // let authorDetails = review.author_details.avatar_path;

      const { content, author, created_at } = review;

      let imgReview = `./img/user_no_photo.png`;

      return `  <div class="reviewOUTPUT__content">

          <div class="reviewOUTPUT__content-name reviewOUTPUT__content-all">
           <img
              src="${imgReview}"
              class="reviewOUTPUT__content-name-img"
              alt=""
            />
            <h4>${author}</h4>
            <h6>${created_at.slice(0, 10)} </h6>
          </div>
         
          <div class="reviewOUTPUT__content-text reviewOUTPUT__content-all">
            <p>
              ${content}
            </p>
          </div>
        </div>`;
    })
    .join();
  dinamicsReviews.innerHTML = reviews;
}

showReviews();

export default showReviews;
