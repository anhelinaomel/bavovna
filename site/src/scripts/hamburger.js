const hamburger = document.querySelector('.hamburger');
const hiddenMenu = document.querySelector('.hidden-menu');

hamburger.addEventListener('click', function() {
  hiddenMenu.classList.toggle('active');
  console.log(hiddenMenu.classList);
});