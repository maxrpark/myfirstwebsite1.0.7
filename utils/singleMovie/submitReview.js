import { reviewDate } from '../displayYear.js';

const reviewForm = document.querySelector('.review-form');
const reviewOUTPUT = document.querySelector('.reviewOUTPUT');

const reviewName = document.getElementById('name');
const reviewText = document.getElementById('reviewText');

const submitReview = reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const yourName = reviewName.value;
  const yourReview = reviewText.value;

  const dinamicReview = document.createElement('div');
  dinamicReview.innerHTML = `  <div class="reviewOUTPUT__content">

          <div class="reviewOUTPUT__content-name reviewOUTPUT__content-all">
           <img
              src="./img/user_no_photo.png"
              class="reviewOUTPUT__content-name-img"
              alt=""
            />
            <h4>${yourName}</h4>
            <h6> ${reviewDate}</h6>
          </div>
         
          <div class="reviewOUTPUT__content-text reviewOUTPUT__content-all">
            <p>
              ${yourReview}
            </p>
          </div>
        </div>`;

  reviewOUTPUT.appendChild(dinamicReview);
  reviewForm.reset();
});

export default submitReview;
