import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantTemplate } from '../templates/template';

const Favorite = {
  async render() {
    return `
    <div class="container">
    <div class="wrapper">
      <div id="restaurant">
        <div class="restaurant__header">
          <h1 class="restaurant__header-title">Favorite Restaurant</h1>
          <p class="restaurant__header-description">
            List of restaurants that you have saved.
          </p>
        </div>
        <div class="restaurant-list">
          
        </div>
      </div>
  </div>
      `;
  },

  async afterRender() {
    const restaurantList = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantListContainer = document.querySelector('.restaurant-list');

    if (restaurantList.length === 0) {
      restaurantListContainer.innerHTML = `
      <div class="restaurant-item__not-found">
        You dont have a list of Favorite Restaurants
      </div>
      `;
    }

    restaurantList.forEach((data) => {
      restaurantListContainer.innerHTML += createRestaurantTemplate(data);
    });
  },
};

export default Favorite;
