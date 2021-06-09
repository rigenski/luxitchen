import RestaurantDbSource from "../../data/restaurantdb-source";
import { createRestaurantTemplate } from "../templates/template";

const Home = {
  async render() {
    return `
    <div class="hero">
        <div class="container">
          <div class="wrapper">
            <label class="hero-label">YOUR BEST DAY</label>
            <h1 class="hero-title">
              Enjoy good needs <br />Starting from where you eat
            </h1>
            <p class="hero-desc">
              Starting from rampant hunger that makes you discouraged, find a
              place to eat <br />with unlimited quality easily near your place.
              Try to start and don't<br />
              forget to share your experience <br />
            </p>
          </div>
        </div>
      </div>
    <div class="container">
    <div class="wrapper">
      <div id="products">
        <div class="products-header">
          <h1 class="products-header-title">Catalog Restaurant</h1>
          <p class="products-header-desc">
            Find a restaurant and make sure you choose the right one.
          </p>
        </div>
        <div class="product-list">
        </div>
      </div>
  </div>
      `;
  },

  async afterRender() {
    const restaurantList = await RestaurantDbSource.restaurantList();
    const productList = document.querySelector(".product-list");

    restaurantList.restaurants.forEach((data) => {
      productList.innerHTML += createRestaurantTemplate(data);
    });
  },
};

export default Home;
