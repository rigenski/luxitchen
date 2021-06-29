const assert = require('assert');

Feature('Favorite Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const notFoundCondition = 'You dont have a list of Favorite Restaurants';

Scenario('liking a restaurant to add to favorite list', async ({ I }) => {
  I.see(notFoundCondition, '.restaurant-item__not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__content-title');

  const firstRestaurant = locate('.restaurant-item__content-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const firstFavoriteRestaurantTitle = await I.grabTextFrom('.restaurant-item__content-title');

  assert.strictEqual(firstRestaurantTitle, firstFavoriteRestaurantTitle);
});

Scenario('unliking a restaurant to add to favorite list', async ({ I }) => {
  I.see(notFoundCondition, '.restaurant-item__not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__content-title');

  const firstRestaurant = locate('.restaurant-item__content-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const firstFavoriteRestaurantTitle = await I.grabTextFrom('.restaurant-item__content-title');

  assert.strictEqual(firstRestaurantTitle, firstFavoriteRestaurantTitle);

  I.click(firstFavoriteRestaurantTitle);

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-list');
  const notFoundFavoriteRestaurant = await I.grabTextFrom('.restaurant-item__not-found');

  assert.strictEqual(notFoundFavoriteRestaurant, notFoundCondition);
});

Scenario('customer reviews on a restaurant', async ({ I }) => {
  I.see(notFoundCondition, '.restaurant-item__not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item');
  I.click(locate('.restaurant-item').first());

  I.seeElement('.restaurant-detail__review-form form');

  const descReview = 'Review for E2E Testing';
  I.fillField('#input-name', 'Rigen Maulana');
  I.fillField('#input-review', descReview);

  I.click('#form-submit');

  const lastReview = locate('.restaurant-detail__review-desc').last();
  const descLastReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(`"${descReview}"`, descLastReview);
});
