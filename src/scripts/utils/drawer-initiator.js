/* eslint-disable no-param-reassign */
const DrawerInitiator = {
  init({ burger, navList, nav }) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('header__navigation-active');

      navList.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });

      burger.classList.toggle('toggle-drawer');
    });
  },
};

export default DrawerInitiator;
