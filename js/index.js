console.log('frontend200tb go-scooter-pass');


/*
Работа слайдера
*/
const img = Array.from(document.querySelectorAll('.js-img'));
const left = document.querySelector('.js-left');
const right = document.querySelector('.js-right');

let currentImg = 0;
img[currentImg].classList.remove('none');

left.classList.add('arrow-disable');

left.addEventListener('click', leftClick);
right.addEventListener('click', rightClick);

function leftClick() {
  if (left.classList.contains('arrow-disable')) {
    return
  }
  right.classList.remove('arrow-disable');
  img[currentImg].classList.add('none');
  currentImg--;
  img[currentImg].classList.remove('none');
  if (currentImg === 0) {
    left.classList.add('arrow-disable');
  }
}

function rightClick() {
  if (right.classList.contains('arrow-disable')) {
    return
  }
  left.classList.remove('arrow-disable');
  img[currentImg].classList.add('none');
  currentImg++;
  img[currentImg].classList.remove('none');
  if (currentImg === 3) {
    right.classList.add('arrow-disable');
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