import RestaurantDbSource from "../data/restaurantdb-source";

const FormReviewInitiator = {
  init() {
    const name = document.getElementById("input-name");
    const review = document.getElementById("input-review");
    const submit = document.getElementById("form-submit");

    submit.addEventListener("click", function () {
      const data = JSON.stringify({
        id: "rqdv5juczeskfw1e867",
        name: name.value,
        review: review.value,
      });

      RestaurantDbSource.sendReview(data);
    });
  },
};

export default FormReviewInitiator;
