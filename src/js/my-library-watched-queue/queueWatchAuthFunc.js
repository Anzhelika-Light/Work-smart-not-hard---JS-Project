import Notiflix from 'notiflix';
import { renderMoviesLibrary } from './renderMoviesLibrary';
//import { userDataQueue, userDataWatched } from './data-template-local-storage';
import { spinnerStart, spinnerStop } from '../loader';
import fetchPopularFilms from '../trending-search-main/fetch-movies';

const watchedBtnEl2 = document.querySelector('.js-library-btn--watched');
const queueBtnEl2 = document.querySelector('.js-library-btn--queue');
const movieListEl2 = document.querySelector('.movie-list');

export async function onWatchedBtnClick(auth, readAllUserData) {
  spinnerStart();
  setTimeout(spinnerStop, 500);
  try {
    queueBtnEl2.style.background = 'transparent';
  } catch {
    return;
  }

  queueBtnEl2.style.borderColor = '#ffffff';

  watchedBtnEl2.style.background = '#ff6b01';
  watchedBtnEl2.style.borderColor = '#ff6b01';
  if (auth.currentUser === null) {
    movieListEl2.innerHTML =
      "<p class='no-movies'>It seems you haven't watched any movie. You should try, it's fun🎭</p>";
    return;
  }

  const movieWatched = await readAllUserData(auth.currentUser.uid);

  if (movieWatched.userDataWatch === undefined) {
    movieListEl2.innerHTML =
      "<p class='no-movies'>It seems you haven't watched any movie. You should try, it's fun🎭</p>";

    return;
  }
  // console.log(movieWatched);
  if (Object.keys(movieWatched).length === 1) {
    movieListEl2.innerHTML =
      "<p>It seems you haven't watched any movie. You should try, it's fun🎭</p>";
    return;
  }
  const moviesCards = movieWatched.userDataWatch
    .map(movie => {
      return renderMoviesLibrary(movie);
    })
    .join('');
  movieListEl2.innerHTML = moviesCards;
}
