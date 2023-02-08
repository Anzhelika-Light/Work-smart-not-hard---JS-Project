// ======================// Для експорта
// import { pinnerStart, spinnerStop } from "./loader";

import { Spinner } from 'spin.js';

const spinnerRef = document.querySelector('.spinner__container');
const backdropRef = document.querySelector('.backdrop');
const spinner = new Spinner();

spinner.spin(spinnerRef);
const spinnerStart = () => {
  spinner.spin(spinnerRef);
  backdropRef.classList.remove('is-hidden');
};

spinnerStart(); //Це функція, яку потрібно вставити у Ваш код

// const spinnerStop = () => {
//   spinner.stop();
//   backdropRef.classList.add('is-hidden');
// };

// spinnerStop(); //Це функція, яку потрібно вставити у Ваш код
