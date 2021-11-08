'use strict';

/* Seleccionamos a TODOS los botones con la clase .show-modal con el querySelectorAll, creando un array
en la variable buttons, de esta manera podemos agregarle un eventListener a todos los elementos con el for loop */
const buttons = document.querySelectorAll('.show-modal');

//Guardamos en una variable los elementos con la clase .hidden
const hidden = document.querySelectorAll('.hidden');

//Le agregamos eventListener a todos los elementos de buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', showModal);
}

/* Seleccionamos a TODOS los elementos HTML con la clase .hidden con querySelectorAll creando un array ejn la variable hidden, luego 
con un for loop le agregamos los métodos style a cada unos de los elementos. */
function showModal() {
  for (let i = 0; i < hidden.length; i++) {
    hidden[i].classList.remove('hidden');
  }
  document.querySelector('.close-modal').addEventListener('click', closeModal);
  document.querySelector('.overlay').addEventListener('click', closeModal);
}

function closeModal() {
  for (let i = 0; i < hidden.length; i++) {
    hidden[i].classList.add('hidden');
  }
}
