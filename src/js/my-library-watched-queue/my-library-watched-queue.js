import Notiflix from 'notiflix';
import { renderMoviesLibrary } from './renderMoviesLibrary';
import { userDataQueue, userDataWatched } from './data-template-local-storage';
import { spinnerStart, spinnerStop } from '../loader';
import fetchPopularFilms from '../trending-search-main/fetch-movies';

const watchedBtnEl = document.querySelector('.js-library-btn--watched');
const queueBtnEl = document.querySelector('.js-library-btn--queue');
const movieListEl = document.querySelector('.movie-list');

// --дефолт інфа в бібліотеці

async function defaultLibrary() {
  let minPage = Math.ceil(1);
  let maxPage = Math.floor(100);
  let page = Math.floor(Math.random() * (maxPage - minPage + 1) + minPage);

  try {
    const IMG_PATH = 'https://image.tmdb.org/t/p/original';
    movieListEl.innerHTML = '';
    const films = await fetchPopularFilms(page);

    // console.log(films.results);

    const markup = `<h3 class='library-gallery-recomend'>RECOMMENDATIONS</h3><div class='library-gallery__default'><img class='library-gallery__default-poster' src=${IMG_PATH}${films.results[1].poster_path}>
    <div><p class='library-gallery__default__title'>${films.results[1].title}</p>
    <p class='library-gallery__default-overview'>${films.results[1].overview}</p></div>
    </div>
    
    <div class='library-gallery__default'><img class='library-gallery__default-poster' src=${IMG_PATH}${films.results[2].poster_path}>
    <div><p class='library-gallery__default__title'>${films.results[2].title}</p>
    <p class='library-gallery__default-overview'>${films.results[2].overview}</p></div>
    </div>
    
    <div class='library-gallery__default'><img class='library-gallery__default-poster' src=${IMG_PATH}${films.results[3].poster_path}>
    <div><p class='library-gallery__default__title'>${films.results[3].title}</p>
    <p class='library-gallery__default-overview'>${films.results[3].overview}</p></div>
    </div>`;

    // console.log(markup);

    movieListEl.innerHTML = markup;
  } catch (error) {
    console.log(error);
  }
}

defaultLibrary();
// --/дефолт інфа в бібліотеці

// при натисканні на Watched
function onWatchedBtnClick() {
  spinnerStart();

  const movieWatched = gettingItem('movieWatched');
  console.log(movieWatched);
  if (movieWatched === undefined) {
    movieListEl.innerHTML =
      "<p class='no-movies'>It seems you haven't watched any movie. You should try, it's fun🎭</p>";
    setTimeout(spinnerStop, 500);

    return;
  }
  // if (movieWatched.length === 0) {
  //   movieListEl.innerHTML =
  //     "<p class='no-movies'>It seems you haven't watched any movie. You should try, it's fun🎭</p>";
  //   setTimeout(spinnerStop, 500);

  //   return;
  // }

  const moviesCards = movieWatched
    .map(movie => {
      return renderMoviesLibrary(movie);
    })
    .join('');
  movieListEl.innerHTML = moviesCards;
  setTimeout(spinnerStop, 500);
}

function onQueueBtnClick() {
  spinnerStart();

  const movieQueue = gettingItem('movieQueue');

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
}

watchedBtnEl.addEventListener('click', onWatchedBtnClick);
queueBtnEl.addEventListener('click', onQueueBtnClick);

// localStorage functions
function gettingItem(key) {
  try {
    const serializedState = localStorage.getItem(key);
    console.log(serializedState);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
    // return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.log('Everyone makes mistakes, this is yours:', error.message);
  }
}
