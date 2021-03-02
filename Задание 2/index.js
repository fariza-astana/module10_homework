//Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert. 
const btn = document.querySelector('.btn-btn');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  getScreenSize();
});
function getScreenSize () {
  if (window.matchMedia("(min-width: 12450px)").matches) {
  alert("Размер экрана вашего устройства больше 12450 пикселей")
  } else {
  alert("Размер экрана вашего устройства меньше 12450 пикселей")
  }
};
