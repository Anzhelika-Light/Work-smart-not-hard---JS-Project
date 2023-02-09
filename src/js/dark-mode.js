const darkToggleEl = document.querySelector('#dark-toggle');
darkToggleEl.addEventListener('click', onDarkToggleElClick);

function onDarkToggleElClick() {
  document.querySelector('body').classList.toggle('darkmode--activated');
}
