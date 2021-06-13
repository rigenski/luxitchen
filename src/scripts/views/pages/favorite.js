import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import { createRestaurantTemplate } from "../templates/template";

const Favorite = {
  async render() {
    return `
    <div class="container">
    <div class="wrapper">
      <div id="products">
        <div class="products-header">
          <h1 class="products-header-title">Favorite Restaurant</h1>
          <p class="products-header-desc">
            List of restaurants that you have saved.
          </p>
        </div>
        <div class="product-list">

        </div>
      </div>
  </div>
      `;
  },

  async afterRender() {
    const restaurantList = await FavoriteRestaurantIdb.getAllRestaurants();
    const productList = document.querySelector(".product-list");

    restaurantList.forEach((data) => {
      productList.innerHTML += createRestaurantTemplate(data);
    });
  },
};

export default Favorite;
