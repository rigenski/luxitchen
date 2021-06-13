import API_ENDPOINT from "../globals/api-endpoint";
import CONFIG from "../globals/config";

class RestaurantDbSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async sendReview(data) {
    await fetch(API_ENDPOINT.REVIEW, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": CONFIG.KEY,
      },
      body: data,
    });

    return window.location.reload();
  }
}

export default RestaurantDbSource;
