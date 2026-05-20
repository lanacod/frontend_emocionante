const text = document.querySelector('.center img');
const div = document.querySelector('.center');

const pauseBtn = document.querySelector('#pause');
const fastBtn = document.querySelector('#fast');
const slowBtn = document.querySelector('#slow');

let angle = 0;
let speed = 10;
let paused = false;

const radius = 50;

function range(){
  return Math.floor(Math.random() * 256);
}

setInterval(() => {

  div.style.backgroundColor =
  `rgb(${range()}, ${range()}, ${range()})`;

},100);

function orbit(){

  if(paused == false){

    angle = (angle - speed) % 360;

    text.style.transform =
    `rotate(${angle}deg)`;

  }

  requestAnimationFrame(orbit);

}

orbit();

pauseBtn.addEventListener('click', () => {

  paused = !paused;

  if(paused == true){

    pauseBtn.innerText = 'Retomar';

  }

  else{

    pauseBtn.innerText = 'Pausar';

  }

});

fastBtn.addEventListener('click', () => {

  speed = speed + 5;

});

slowBtn.addEventListener('click', () => {

  if(speed > 0){

    speed = speed - 5;

  }

});