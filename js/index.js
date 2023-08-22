console.log('frontend200tb go-scooter-pass');


/*
Работа слайдера
*/
const slider = document.querySelector('.js-slider');
const btnLeft = document.querySelector('.js-left');
const btnRight = document.querySelector('.js-right');

let currentImg = 0;
const maxImg = 3;
let leftPosition = 0;
const widthImg = 353;

btnLeft.classList.add('arrow-disable');

btnLeft.addEventListener('click', leftClick);
btnRight.addEventListener('click', rightClick);

function leftClick() {
  if (btnLeft.classList.contains('arrow-disable')) {
    return
  }
  btnRight.classList.remove('arrow-disable');
  currentImg--;
  leftPosition += widthImg; 
  slider.style.left = `${leftPosition}px`;
  if (currentImg === 0) {
    btnLeft.classList.add('arrow-disable');
  }
}

function rightClick() {
  if (btnRight.classList.contains('arrow-disable')) {
    return
  }
  btnLeft.classList.remove('arrow-disable');
  currentImg++;
  leftPosition -= widthImg; 
  slider.style.left = `${leftPosition}px`;
  if (currentImg === maxImg) {
    btnRight.classList.add('arrow-disable');
  }
}
/*
/Работа слайдера
*/


/*
Нажатие на кнопку
*/
const page = document.querySelector('.js-page');
const btn = document.querySelector('.js-btn');
const btn1 = document.querySelector('.js-btn1');

btn.addEventListener('click', author);
btn1.addEventListener('click', author);

const popup = document.createElement('div');
popup.style.position = 'fixed';
popup.style.top = '50%';
popup.style.left = '50%';
popup.style.transform = 'translate(-50%, -50%)'
popup.style.padding = '20px';
popup.style.width = '311px';
popup.style.height = '160px';
popup.style.fontSize = '20px';
popup.style.borderRadius = '50px';
popup.style.boxShadow = '10px 10px';
popup.style.cursor = 'pointer';
popup.style.zIndex = '10';
popup.style.backgroundColor = '#FFDE40';
popup.classList.add('none');
const text = 'Иван Каширин. Тестовое задание на вакансию Верстальщик Лендингов в Яндексе. Выполнил 19-20 августа 2023 года.';
popup.innerHTML = text;
page.prepend(popup);

const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.width = '100vw';
overlay.style.height = '100vh';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5';
overlay.classList = 'none';
page.prepend(overlay);

popup.addEventListener('click', author);

function author() {
  popup.classList.toggle('none');
  overlay.classList.toggle('none');
}
/*
/Нажатие на кнопку
*/