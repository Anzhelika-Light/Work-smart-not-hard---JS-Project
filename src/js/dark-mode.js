const darkToggleEl = document.querySelector('#dark-toggle');
const darkTogleLableEl = document.querySelector('.dark-toggle-label');

darkToggleEl.addEventListener('click', onDarkToggleElClick);

if (localStorage.getItem('isDarkModeOn') === 'true') {
  turnDarkModeOn();
  darkToggleEl.checked = true;
}

function onDarkToggleElClick() {
  turnDarkModeOn();
  //change local storage
  if (localStorage.getItem('isDarkModeOn') === 'true') {
    localStorage.setItem('isDarkModeOn', 'false');
  } else {
    localStorage.setItem('isDarkModeOn', 'true');
  }
}

function turnDarkModeOn() {
  document.querySelector('body').classList.toggle('darkmode--activated');
  setTimeout(() => {
    darkTogleLableEl.textContent =
      darkTogleLableEl.textContent === 'Day' ? 'Night' : 'Day';
  }, 250);
}
