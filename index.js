var app = {
  init: function () {
    document
      .getElementById(`responsive-menu`)
      .addEventListener(`click`, (e) => {
        document.getElementById(`nav`).classList.toggle(`active`);
        document.querySelector(`body`).classList.toggle(`scroll-none`);
      });

    document.getElementById(`close-nav`).addEventListener(`click`, (e) => {
      document.getElementById(`nav`).classList.toggle(`active`);
      document.querySelector(`body`).classList.toggle(`scroll-none`);
    });

    document.getElementById(`#contact`).addEventListener(`click`, (e) => {
      document.getElementById(`nav`).classList.toggle(`active`);
      document.querySelector(`body`).classList.toggle(`scroll-none`);
    });
  },
};

document.addEventListener("DOMContentLoaded", app.init);
