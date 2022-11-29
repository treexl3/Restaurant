const burger = document.querySelector('.burger-button');
const menu = document.querySelector('.burger-menu__slide');

if (burger) {
   burger.addEventListener("click", function (e) {
   burger.classList.toggle('disp');
   menu.classList.toggle('disp');
   });
}