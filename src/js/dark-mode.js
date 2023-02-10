const darkToggleEl = document.querySelector('#dark-toggle');
const darkTogleLableEl = document.querySelector('.dark-toggle-label');

darkToggleEl.addEventListener('click', onDarkToggleElClick);

function onDarkToggleElClick() {
  document.querySelector('body').classList.toggle('darkmode--activated');
  darkTogleLableEl.textContent =
    darkTogleLableEl.textContent === 'Day' ? 'Night' : 'Day';
}
