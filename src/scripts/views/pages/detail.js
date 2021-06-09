import UrlParser from "../../routes/url-parser";
import RestaurantDbSource from "../../data/restaurantdb-source";
import { createRestaurantDetailTemplate } from "../templates/template";

const Detail = {
  async render() {
    return `
    <div class="container">
      <div class="wrapper">
        <div class="product-detail">
          
        </div>
      </div>
    </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.restaurantDetail(url.id);
    const catalogDetail = document.querySelector(".product-detail");
    console.log(restaurant);

    catalogDetail.innerHTML = createRestaurantDetailTemplate(
      restaurant.restaurant
    );
  },
};

export default Detail;
