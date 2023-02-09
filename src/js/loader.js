// ======================// Для експорта
// import { spinnerStart, spinnerStop } from "./loader";

const backdropRef = document.querySelector('.backdrop-loader');

export const spinnerStart = () => {
  backdropRef.classList.remove('is-hidden');
};

// spinnerStart(); //Це функція, яку потрібно вставити у Ваш код

export const spinnerStop = () => {
  backdropRef.classList.add('is-hidden');
};

setTimeout(spinnerStop, 3000);

// spinnerStop(); //Це функція, яку потрібно вставити у Ваш код
