// ======================// Для експорта
// import { spinnerStart, spinnerStop } from "./loader";

const backdropRef = document.querySelector('.backdrop-loader');

export const spinnerStart = () => {
  backdropRef.classList.remove('is-hidden');
};

export const spinnerStop = () => {
  backdropRef.classList.add('is-hidden');
};

// spinnerStart(); //Це функція, яку потрібно вставити у Ваш код

// setTimeout(() => {
//   spinnerStop();
// }, 1000);      //Це функція, яку потрібно вставити у Ваш код
