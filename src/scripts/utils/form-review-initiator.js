import RestaurantDbSource from "../data/restaurantdb-source";

const FormReviewInitiator = {
  init() {
    const name = document.getElementById("input-name");
    const review = document.getElementById("input-review");
    const submit = document.getElementById("form-submit");

    let url = window.location.hash;
    url = url.split("/");

    submit.addEventListener("click", function () {
      const data = JSON.stringify({
        id: url.slice(-1).pop(),
        name: name.value,
        review: review.value,
      });

      RestaurantDbSource.sendReview(data);
    });
  },
};

export default FormReviewInitiator;
