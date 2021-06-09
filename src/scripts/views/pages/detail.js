import UrlParser from "../../routes/url-parser";
import RestaurantDbSource from "../../data/restaurantdb-source";
import {
  createRestaurantDetailTemplate,
  createRestaurantDetailCategoryTemplate,
} from "../templates/template";

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
    const productDetail = document.querySelector(".product-detail");

    console.log(restaurant);

    productDetail.innerHTML = createRestaurantDetailTemplate(
      restaurant.restaurant
    );

    const productDetailCategory = document.querySelector(
      ".product-detail-category"
    );

    restaurant.restaurant.categories.forEach((data) => {
      productDetailCategory.innerHTML += createRestaurantDetailCategoryTemplate(
        data.name
      );
    });
  },
};

export default Detail;
