'use strict';

/* Seleccionamos a TODOS los botones con la clase .show-modal con el querySelectorAll, creando un array
en la variable buttons, de esta manera podemos agregarle un eventListener a todos los elementos con el for loop */
const buttons = document.querySelectorAll('.show-modal');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', showModal);
}

/* Seleccionamos a TODOS los elementos HTML con la clase .hidden con querySelectorAll creando un array ejn la variable hidden, luego 
con un for loop le agregamos los métodos style a cada unos de los elementos. */
function showModal() {
  const hidden = document.querySelectorAll('.hidden');
  for (let i = 0; i < hidden.length; i++) {
    hidden[i].style.display = 'inline-block';
  }
  document.querySelector('.close-modal').addEventListener('click', function () {
    for (let i = 0; i < hidden.length; i++) {
      hidden[i].style.display = 'none';
    }
  });
}
