const assert = require('assert');

Feature('Favorite Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const firstCondition = 'You dont have a list of Favorite Restaurants';

Scenario('liking one restaurant', async ({ I }) => {
  I.see(firstCondition, '.restaurant-item__not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__content-title');

  const firstRestaurant = locate('.restaurant-item__content-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__content-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({I}) => {
  I.see(firstCondition, '.restaurant-item__not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__content-title');

  const firstRestaurant = locate('.restaurant-item__content-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__content-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // mengklik card restaurant yg ada di fav
  I.click(likedRestaurantTitle);

  // mengunlike restaurant yang ada di fav
  I.seeElement('#like-button');
  I.click('#like-button');

  // kembali ke halaman fav
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-list');
  const noFavRestaurant = await I.grabTextFrom('.restaurant-item__not-found');

  assert.strictEqual(noFavRestaurant, firstCondition);
});

Scenario('customer review', async ({ I }) => {
  I.see(firstCondition, '.restaurant-item__not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item');
  I.click(locate('.restaurant-item').first());

  I.seeElement('.restaurant-detail__review-form form');

  // const textReview = 'Description Review for Test E2SSS';
  const things = ['Rock', 'Paper', 'Scissor', 'Dessert', 'Grass', 'Luck', 'Beer', 'Hood'];
  const rand = things[Math.floor(Math.random() * things.length)];
  I.fillField('#input-name', 'Name');
  I.fillField('#input-review', rand);

  I.click('#form-submit');

  const lastReview = locate('.restaurant-detail__review-desc').last();
  const textLastReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(`"${rand}"`, textLastReview);
});
