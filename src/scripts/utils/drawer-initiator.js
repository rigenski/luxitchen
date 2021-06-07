const DrawerInitiator = {
  init({ burger, navList, nav }) {
    burger.addEventListener("click", (event) => {
      nav.classList.toggle("nav-active");

      navList.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });

      burger.classList.toggle("toggle");
    });
  },
};

export default DrawerInitiator;
