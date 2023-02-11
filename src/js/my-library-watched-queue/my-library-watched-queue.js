import Notiflix from 'notiflix';
import { renderMoviesLibrary } from './renderMoviesLibrary';
import { userDataQueue, userDataWatched } from './data-template-local-storage';
import { spinnerStart, spinnerStop } from '../loader';

const watchedBtnEl = document.querySelector('.js-library-btn--watched');
const queueBtnEl = document.querySelector('.js-library-btn--queue');
const movieListEl = document.querySelector('.movie-list');

onWatchedBtnClick();
watchedBtnEl.style.background = '#ff6b01';
watchedBtnEl.style.borderColor = '#ff6b01';

// при натисканні на Watched
function onWatchedBtnClick() {
  spinnerStart();

  queueBtnEl.style.background = 'transparent';
  queueBtnEl.style.borderColor = '#ffffff';

  watchedBtnEl.style.background = '#ff6b01';
  watchedBtnEl.style.borderColor = '#ff6b01';
  const movieWatched = gettingItem('movieWatched');
  if (movieWatched.length === 0) {
    movieListEl.innerHTML =
      "<p class='no-movies'>It seems you haven't watched any movie. You should try, it's fun🎭</p>";
    setTimeout(spinnerStop, 500);

    return;
  }
  const moviesCards = movieWatched
    .map(movie => {
      return renderMoviesLibrary(movie);
    })
    .join('');
  movieListEl.innerHTML = moviesCards;
  setTimeout(spinnerStop, 500);
  // console.log(movieWatched);
}

function onQueueBtnClick() {
  spinnerStart();

  queueBtnEl.style.background = '#ff6b01';
  queueBtnEl.style.borderColor = '#ff6b01';

  watchedBtnEl.style.background = 'transparent';
  watchedBtnEl.style.borderColor = '#ffffff';
  const movieQueue = gettingItem('movieQueue');
  // console.log(movieQueue);
  if (movieQueue.length === 0) {
    movieListEl.innerHTML =
      "<p class='no-movies'>The queue is empty. Add all Harry Potter movies - you won't regret this✨</p>";
    setTimeout(spinnerStop, 500);

    return;
  }

  const moviesCards = movieQueue
    .map(movie => {
      return renderMoviesLibrary(movie);
    })
    .join('');
  movieListEl.innerHTML = moviesCards;

  setTimeout(spinnerStop, 500);

  // console.log(movieQueue);
}

watchedBtnEl.addEventListener('click', onWatchedBtnClick);
queueBtnEl.addEventListener('click', onQueueBtnClick);

// localStorage functions
function gettingItem(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.log('Everyone makes mistakes, this is yours:', error.message);
  }
}
