import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import App from "./views/app";
import dataRestaurant from "../DATA.json";
import dataFeedback from "../DataFeedback.json";

const app = new App({
  // DRAWER
  burger: document.querySelector(".burger"),
  navList: document.querySelectorAll(".nav-item"),
  nav: document.getElementById("nav"),
  content: document.getElementById("main"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});


// dataFeedback.feedbacks.forEach((data) => {
//   const list = document.querySelector(".feedback-list");

//   list.innerHTML += `<div class="feedback-item">
//   <div class="feedback-profile">
//     <img
//       class="feedback-profile-image"
//       src="${data.pictureId}"
//       alt=""
//     />
//     <div class="feedback-profile-detail">
//       <h2>${data.name}</h2>
//       <label>${data.role}</label>
//     </div>
//   </div>
//   <p class="feedback-desc">
//     “ ${data.description} ”
//   </p>
// </div>`;
// });
