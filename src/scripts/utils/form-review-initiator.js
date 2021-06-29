import RestaurantDbSource from '../data/restaurantdb-source';

const FormReviewInitiator = {
  init() {
    const name = document.getElementById('input-name');
    const review = document.getElementById('input-review');
    const submit = document.getElementById('form-submit');

    const reviewContainer = document.querySelector('.restaurant-detail__review-list');
    const reviewItem = document.querySelector('.restaurant-detail__review-item');

    let url = window.location.hash;
    url = url.split('/');

    submit.addEventListener('click', () => {
      const data = JSON.stringify({
        id: url.slice(-1).pop(),
        name: name.value,
        review: review.value,
      });

      RestaurantDbSource.sendReview(data);

      const newReview = `
      <div class="restaurant-detail__review-item">
      <div class="restaurant-detail__review-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
        <div class="restaurant-detail__review-title">
          <h2>${name.value}</h2>
          <label>30 Juni 2021</label>
        </div>
      </div>
      <p class="restaurant-detail__review-desc">
        "${review.value}"
      </p>
    </div>
      `;

      reviewItem.remove();

      reviewContainer.innerHTML += newReview;
    });
  },
};

export default FormReviewInitiator;
