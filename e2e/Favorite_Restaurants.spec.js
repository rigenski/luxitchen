const assert = require('assert');

Feature('Favorite Restaurants');

Before((I) => {
  I.amOnPage('/#/favorite');
});

const firstCondition = 'no favorite restaurants to show';

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-list');

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

Scenario('unliking one restaurant', async (I) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-list');

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
  const noFavRestaurant = await I.grabTextFrom('.restaurant-list');

  assert.strictEqual(noFavRestaurant, 'Tidak ada restoran untuk ditampilkan');
});

Scenario('customer review', async (I) => {
  I.see(firstCondition, 'restaurant-list');

  I.amOnPage('/');

  I.seeElement('.restaurant-item');
  I.click(locate('.restaurant-item').first());

  I.seeElement('.restaurant-detail__review-form form');

  const textReview = 'Testing Review';
  I.fillField('inputName', 'firman jabar');
  I.fillField('inputReview', textReview);

  I.click('#form-submit');

  const lastReview = locate('.restaurant-detail__review-desc').last();
  const textLastReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(textReview, textLastReview);
});
