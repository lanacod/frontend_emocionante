const text = document.querySelector('.center img');
const div = document.querySelector('.center');

const pauseBtn = document.querySelector('#pause');
const fastBtn = document.querySelector('#fast');
const slowBtn = document.querySelector('#slow');
const divideBtn = document.querySelector('#divide');
const speedText = document.querySelector('h1');
const zenBtn = document.querySelector('#Modo-zen');
const chaosBtn = document.querySelector('#Modo-caos');

let angle = 0;
let speed = 0;
let paused = false;
speedText.innerText = `velocidade:${speed}`;
const radius = 50;
let backgroundSpeed= 100;
let colorInterval;


function range() {
  return Math.floor(Math.random() * 256);
}

function startBackground() {

  clearInterval(colorInterval);

  colorInterval = setInterval(() => {

  div.style.backgroundColor =
    `rgb(${range()}, ${range()}, ${range()})`;

}, backgroundSpeed);

}
startBackground();

function orbit() {

  if (!paused) {

    angle = (angle - speed) % 360;

    text.style.transform =
      `rotate(${angle}deg)`;

  }

  requestAnimationFrame(orbit);

}

orbit();

pauseBtn.addEventListener('click', () => {

  paused = !paused;

  if (paused) {

    pauseBtn.innerText = 'Retomar';
    return
  } pauseBtn.innerText = 'Pausar';
});

fastBtn.addEventListener('click', () => {


  speed += 5;
  speedText.innerText = `velocidade:${speed}`;

});

slowBtn.addEventListener('click', () => {

  if ((speed - 3) < 0) {
    speed = 0;
    speedText.innerText = `velocidade:${speed}`;

  }
  if ((speed - 3) >= 0) {


    speed -= 3;
    speedText.innerText = `velocidade:${speed}`;


  }
  
  
});
divideBtn.addEventListener('click', () => {
   
    speed= speed/ 2;
    speedText.innerText = `velocidade:${speed}`;


   });

zenBtn.addEventListener('click', () => {
  backgroundSpeed= 1000;
  speed= 5;
  speedText.innerText = `velocidade:${speed}`;
  startBackground();


});

chaosBtn.addEventListener('click', () => {
  backgroundSpeed= 50;
  speed= 20;
  speedText.innerText = `velocidade:${speed}`;
  startBackground();

});
