const button = document.querySelector('button');
const dropdown = document.querySelector('.js_dropdown');
const a = document.querySelector('a');

a.onclick = function (evt) {
  evt.preventDefault();
  console.log('holaa');
};

button.onclick = function(event) {
  if (dropdown.getElementsByClassName.display === 'block') {
    this.textContent = 'ABRIR DROPDOWN';
    dropdown.getElementsByClassName.display = 'none';
  } else {
    this.textContent = 'CERRAR DROPDOWN';
    dropdown.getElementsByClassName.display = 'block';
  }
};

const input = document.querySelector('input[type="text"]');
console.log('input',input);
input.onkeyup = function (evt) {
  console.log('acaa', this.value);
  console.log('event input', evt.target.value);
};

const inputCheck = document.querySelector('input[type="checkbox"]');
console.log('input', input);
inputCheck.onchange =  function () {
  console.log('aca', this.checked);
};

window.onresize = function() {
  console.log('resize!!!', window.innerWidth, window.innerHeight);
};

const form = document.querySelector('form');

form.onsubmit = function(evt) {
  evt.preventDefault();
  console.log('nombre', this.querySelector('input[placeholder="Nombre"]').value);
  console.log('apellido', this.querySelector('input[placeholder="Apellido"]').value);
};

//  button.onclick = function () {
//    console.log('onclick a sido sobre escrito !!!!');
//  };

function fnOne() {
  console.log('fnOne!!!!');
};

function fnTwo() {
  console.log('fnTwo!!!!');
};

function fnThree() {
  console.log('fnThree!!!!');
};

button.addEventListener('click', fnOne);
button.addEventListener('click', fnTwo);
button.addEventListener('click', fnThree); // registrando evento

const btnQuit = document.querySelector('.js_quit');
btnQuit.addEventListener('click', function() {
  console.log('quitando en registro!!');
  button.removeEventListener('click', fnTree); // quitando el evento
});

document.querySelector('body').addEventListener('mousemove', function(event) {
  console.log(event.clientX);
  console.log(event.clientY);

  this.style.backgroundColor = `rgba(
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    1
  )`;
});