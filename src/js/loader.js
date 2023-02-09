// ======================// Для експорта
// import { spinnerStart, spinnerStop } from "./loader";

const spinnerRef = document.querySelector('.spinner__container');
const backdropRef = document.querySelector('.backdrop');

const spinnerStart = () => {
  backdropRef.classList.remove('is-hidden');
};

spinnerStart(); //Це функція, яку потрібно вставити у Ваш код

const spinnerStop = () => {
  backdropRef.classList.add('is-hidden');
};

setTimeout(spinnerStop, 2000);

//Це функція, яку потрібно вставити у Ваш код
