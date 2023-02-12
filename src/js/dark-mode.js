const darkToggleEl = document.querySelector('#dark-toggle');
const darkToggleWindowEl = document.querySelector('.dark-toggle-window');
const darkTogleLableEl = document.querySelector('.dark-toggle-label');

console.log('darkmode hello', darkToggleEl);

darkToggleWindowEl.addEventListener('click', onDarkToggleElClick);

if (localStorage.getItem('isDarkModeOn') === 'true') {
  turnDarkModeOn();
  darkToggleEl.checked = true;
}

function onDarkToggleElClick() {
  console.log('darkmode click');

  turnDarkModeOn();
  //change local storage
  if (localStorage.getItem('isDarkModeOn') === 'true') {
    localStorage.setItem('isDarkModeOn', 'false');
    setTimeout(() => (darkToggleEl.checked = false), 250);
  } else {
    localStorage.setItem('isDarkModeOn', 'true');
    setTimeout(() => (darkToggleEl.checked = true), 250);
  }
}

function turnDarkModeOn() {
  document.querySelector('body').classList.toggle('darkmode--activated');
  setTimeout(() => {
    darkTogleLableEl.textContent =
      darkTogleLableEl.textContent === 'Day' ? 'Night' : 'Day';
  }, 250);
}
