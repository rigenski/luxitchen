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
        <div id="restaurant-detail">
          
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
    const restaurantDetail = document.querySelector("#restaurant-detail");

    restaurantDetail.innerHTML = createRestaurantDetailTemplate(
      restaurant.restaurant
    );

    const restaurantDetailCategory = document.querySelector(
      ".restaurant-detail__category"
    );

    restaurant.restaurant.categories.forEach((data) => {
      restaurantDetailCategory.innerHTML +=
        createRestaurantDetailCategoryTemplate(data);
    });

    const menuFoods = document.querySelector(".restaurant-detail__menu-foods");

    const menuDrinks = document.querySelector(
      ".restaurant-detail__menu-drinks"
    );

    const reviewList = document.querySelector(
      ".restaurant-detail__review-list"
    );

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

    const formReview = document.querySelector(
      ".restaurant-detail__review-form"
    );

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
