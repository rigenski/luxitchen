import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantTemplate } from '../templates/template';

const Home = {
  async render() {
    return `
    <div id="hero">
        <div class="container">
          <div class="wrapper">
            <label class="hero-label">YOUR BEST DAY</label>
            <h1 class="hero-title">
              Enjoy good needs <br />Starting from where you eat
            </h1>
            <p class="hero-description">
              Starting from rampant hunger that makes you discouraged, find a
              place to eat <br />with unlimited quality easily near your place.
              Try to start and don't <br />
              forget to share your experience <br />
            </p>
          </div>
        </div>
      </div>
    <div class="container">
    <div class="wrapper">
      <div id="restaurant">
        <div class="restaurant__header">
          <h1 class="restaurant__header-title">Catalog Restaurant</h1>
          <p class="restaurant__header-desc">
            Find a restaurant and make sure you choose the right one.
          </p>
        </div>
        <div class="restaurant-list">
        </div>
      </div>
  </div>
      `;
  },

  async afterRender() {
    const restaurantList = await RestaurantDbSource.restaurantList();
    const restaurantListContainer = document.querySelector('.restaurant-list');

    restaurantList.restaurants.forEach((data) => {
      restaurantListContainer.innerHTML += createRestaurantTemplate(data);
    });
  },
};

export default Home;
