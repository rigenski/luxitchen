import CONFIG from '../../globals/config';

const createRestaurantTemplate = (data) => `
  <a class="restaurant-item" href="#/detail/${data.id}">
    <div
      class="restaurant-item-image"
      style="background-image: url(${CONFIG.BASE_IMAGE_URL}/${data.pictureId})"
      alt="${data.name} avatar image"
    ></div>
    <div class="restaurant-item__content">
      <h2 class="restaurant-item__content-title">${data.name}</h2>
      <label class="restaurant-item__content-label">${data.city} | ${
  data.rating
}</label>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        class="bi bi-star-fill"
        viewBox="0 0 16 16"
        style="margin-bottom: -0.1em"
      >
        <path
          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          style="color: #FF8303"
        />
      </svg>
      <p class="restaurant-item__content-description">
        ${data.description.substring(0, 88)} ...
      </p>
    </div></a
  >
`;
const createRestaurantDetailTemplate = (data) => `
<div class="restaurant-detail__header">
  <h1 class="restaurant-detail__header-title">${data.name}</h1>
  <div class="restaurant-detail__header-label">
    <label class="restaurant-detail__header-location">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-geo-alt-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
        />
      </svg>
      <span>${data.address}, ${data.city}</span>
    </label>
    <label class="restaurant-detail__header-rating"
      >${data.rating}<svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        class="bi bi-star-fill"
        viewBox="0 0 16 16"
        style="margin-bottom: -0.1em"
      >
        <path
          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          style="color: #FF8303"
        /></svg
    ></label>
  </div>
</div>
<div
  class="restaurant-detail__image"
  style="background-image: url(${CONFIG.BASE_IMAGE_URL}/${data.pictureId})"
  alt="${data.name} Restaurant Image"
></div>
<div class="restaurant-detail__overview">
  <h1>Overview</h1>
  <p>${data.description}</p>
  <div class="restaurant-detail__category"></div>
  <div class="restaurant-detail__menu">
  <div class="restaurant-detail__menu-container">
    <h2>Foods</h2>
    <div class="restaurant-detail__menu-foods menu-list">
    
    </div>
  </div>
  <div class="restaurant-detail__menu-container">
    <h2>Drinks</h2>
    <div class="restaurant-detail__menu-drinks menu-list">
    
    </div>
  </div>
</div>
<div class="restaurant-detail__review">
<h1>Review</h1>
<div class="restaurant-detail__review-list">

</div>
<div class="restaurant-detail__review-form">
  
</div>
</div>
</div>
  `;

const createRestaurantDetailCategoryTemplate = (data) => `
    <div class="restaurant-detail__category-item">${data.name}</button>
  `;

const createMenuItemTemplate = (data) => `
  <span class="restaurant-detail__menu-item">
        ${data.name}, 
  </span>
  `;

const createReviewItemTemplate = (data, name) => `
    <div class="restaurant-detail__review-item">
      <div class="restaurant-detail__review-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
        <div class="restaurant-detail__review-title">
          <h2>${name}</h2>
          <label>${data.date}</label>
        </div>
      </div>
      <p class="restaurant-detail__review-desc">
        "${data.review}"
      </p>
    </div>
  `;

const createFormReviewTemplate = () => `
<form>
    <div class="form-title">
      <h2>Send Review</h2>  
    </div>
      <div class="form-group">
        <label for="input-name">Name</label>
        <input type="text" class="form-input" id="input-name">
      </div>
      <div class="form-group">
        <label for="input-review">Review</label>
        <input type="text" class="form-input" id="input-review">
      </div>
      <button type="submit" id="form-submit">Submit</button>
    </form>`;

const createLikeButtonTemplate = () => `
  <button class="like-button" id="likeButton" aria-label="like this movie">
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" style="color: #fff"/>
</svg>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button class="like-button" id="likeButton" aria-label="unlike this movie">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" style="color: #fff" />
    </svg>
  </button>
`;

export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
  createRestaurantDetailCategoryTemplate,
  createMenuItemTemplate,
  createReviewItemTemplate,
  createFormReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
