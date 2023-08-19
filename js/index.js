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