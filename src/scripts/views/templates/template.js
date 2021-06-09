import CONFIG from "../../globals/config";

const createRestaurantTemplate = (data) => `
<div class="product-item">
<a href="#/detail/${data.id}">
<div class="product-img" style="background-image:url(${CONFIG.BASE_IMAGE_URL}/${
  data.pictureId
});" alt="${data.name} avatar image"></div>
<div class="product-content">
  <h2 class="product-content-title">${data.name}</h2>
  <label class="product-content-label">${data.city} | ${data.rating}</label>
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
      style="color: rgba(255, 131, 3, 0.75)"
    />
  </svg>
  <p class="product-content-desc">
    ${data.description.substring(0, 88)} ...
  </p>
</div></a>
</div>
  `;

const createRestaurantDetailTemplate = (data) => `
    <h1 class="product-detail-title">
      ${data.name}
    </h1>
    <div class="product-detail-spec">
    <label class="product-detail-location">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
    </svg>
    <h4>${data.address}</h4>
    </label>
    <label class="product-detail-rating">${data.rating}<svg
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
      style="color: rgba(255, 131, 3, 0.75)"
    />
  </svg></label>
    </div>
    <div class="product-detail-img" style="background-image:url(${CONFIG.BASE_IMAGE_URL}/${data.pictureId});" alt="${data.name} avatar image"></div>
    <div class="product-detail-overview">
      <h2>Overview</h2>
      <p>${data.description}</p>
      <div class="product-detail-category">
        
      </div>
    </div>

    <div class="product-detail-menu">
    <div class="product-detail-menu-header">
      <h1>Menu  </h1>
    </div>
    <h2>Food: </h2>
    </div>
  `;

const createRestaurantDetailCategoryTemplate = (data) => `
    <button>${data}</button>
  `;

export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
  createRestaurantDetailCategoryTemplate,
};
