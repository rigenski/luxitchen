import UrlParser from "../../routes/url-parser";
import RestaurantDbSource from "../../data/restaurantdb-source";
import {
  createRestaurantDetailTemplate,
  createMenuItemTemplate,
  createRestaurantDetailCategoryTemplate,
  createReviewItemTemplate,
  createFormReviewTemplate,
  // createLikeButtonTemplate,
  // createLikedButtonTemplate,
} from "../templates/template";
import FormReviewInitiator from "../../utils/form-review-initiator";
import LikeButtonInitiator from "../../utils/like-button-initiator";

const Detail = {
  async render() {
    return `
    <div class="container">
      <div class="wrapper">
        <div class="product-detail">
          
        </div>
        <div id="like-button-container">
        </div>
      </div>
    </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.restaurantDetail(url.id);
    const productDetail = document.querySelector(".product-detail");

    productDetail.innerHTML = createRestaurantDetailTemplate(
      restaurant.restaurant
    );

    const productDetailCategory = document.querySelector(
      ".product-detail-category"
    );

    restaurant.restaurant.categories.forEach((data) => {
      productDetailCategory.innerHTML +=
        createRestaurantDetailCategoryTemplate(data);
    });

    const menuFoods = document.querySelector(".product-detail-menu-foods");

    const menuDrinks = document.querySelector(".product-detail-menu-drinks");

    const reviewList = document.querySelector(".product-detail-review-list");

    restaurant.restaurant.menus.foods.forEach((data) => {
      menuFoods.innerHTML += createMenuItemTemplate(data);
    });

    restaurant.restaurant.menus.drinks.forEach((data) => {
      menuDrinks.innerHTML += createMenuItemTemplate(data);
    });

    restaurant.restaurant.customerReviews.slice(-6).forEach((data) => {
      let name = data.name[0].toUpperCase() + data.name.slice(1);
      reviewList.innerHTML += createReviewItemTemplate(data, name);
    });

    const formReview = document.querySelector(".product-detail-review-form");

    formReview.innerHTML = createFormReviewTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#like-button-container"),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        pictureId: restaurant.restaurant.pictureId,
        city: restaurant.restaurant.city,
        rating: restaurant.restaurant.rating,
      },
    });

    FormReviewInitiator.init();
  },
};

export default Detail;
