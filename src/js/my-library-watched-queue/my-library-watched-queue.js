import Notiflix from 'notiflix';
import { renderMoviesLibrary } from './renderMoviesLibrary';
import { userDataQueue, userDataWatched } from './data-template-local-storage';

const watchedBtnEl = document.querySelector('.js-library-btn--watched');
const queueBtnEl = document.querySelector('.js-library-btn--queue');
const movieListEl = document.querySelector('.movie-list');

// при натисканні на Watched
function onWatchedBtnClick() {
  const movieWatched = gettingItem('movieWatched');
  if (movieWatched.length === 0) {
    movieListEl.innerHTML = '<p>Ви ще не переглянули жодного фільму</p>';
    return;
  }
  const moviesCards = movieWatched
    .map(movie => {
      return renderMoviesLibrary(movie);
    })
    .join('');
  movieListEl.innerHTML = moviesCards;
  // console.log(movieWatched);
}

function onQueueBtnClick() {
  const movieQueue = gettingItem('movieQueue');
  // console.log(movieQueue);
  if (movieQueue.length === 0) {
    movieListEl.innerHTML = '<p>Ви ще не переглянули жодного фільму</p>';
    return;
  }

  const moviesCards = movieQueue
    .map(movie => {
      return renderMoviesLibrary(movie);
    })
    .join('');
  movieListEl.innerHTML = moviesCards;
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
