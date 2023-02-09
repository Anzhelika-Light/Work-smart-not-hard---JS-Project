import Notiflix from 'notiflix';
import TmdbAPI from '../TMDB_API';
import emptyphoto from '../../images/empty-photo/empty-poster.jpg';
// ---приклад даних, які приходять з localStorage
userDataWatched = [
  {
    poster_path: '/rM6qLVhApXiXYjMuzSFOESUiVaJ.jpg',
    title: 'Cats & Dogs',
    genre_ids: [
      { id: 10751, name: 'Family' },
      { id: 35, name: 'Comedy' },
    ],
    release_date: '2001-07-04',
    vote_average: 5.385,
  },
  {
    poster_path: '/1pDYetDF3r9V7ZB5SeyoPcUkBiB.jpg',
    title: 'Viking Wolf',
    genre_ids: [
      { id: 27, name: 'Horror' },
      { id: 53, name: 'Thriller' },
      { id: 9648, name: 'Mystery' },
    ],
    release_date: '2022-11-18',
    vote_average: 5.6,
  },
  {
    poster_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
    title: 'Wakanda Foreva',
    genre_ids: [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
      { id: 878, name: 'Science Fiction' },
    ],
    release_date: '2022-11-09',
    vote_average: 7.491,
  },
];

userDataQueue = [
  {
    poster_path: '/rM6qLVhApXiXYjMuzSFOESUiVaJ.jpg',
    title: 'Cats & Dogs',
    genre_ids: [
      { id: 10751, name: 'Family' },
      { id: 35, name: 'Comedy' },
    ],
    release_date: '2001-07-04',
    vote_average: 5.385,
  },
  {
    poster_path: '/1pDYetDF3r9V7ZB5SeyoPcUkBiB.jpg',
    title: 'Viking Wolf',
    genre_ids: [
      { id: 27, name: 'Horror' },
      { id: 53, name: 'Thriller' },
      { id: 9648, name: 'Mystery' },
    ],
    release_date: '2022-11-18',
    vote_average: 5.6,
  },
  {
    poster_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
    title: 'Wakanda Foreva',
    genre_ids: [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
      { id: 878, name: 'Science Fiction' },
    ],
    release_date: '2022-11-09',
    vote_average: 7.491,
  },
];

settingItem('movieWatched', userDataWatched);
settingItem('movieQueue', userDataWatched);
// ---/приклад даних, які приходять з localStorage

const watchedBtnEl = document.querySelector('.js-library-btn--watched');
const queueBtnEl = document.querySelector('.js-library-btn--queue');
const movieListEl = document.querySelector('.movie-list');

const tmdbAPI = new TmdbAPI();

// при натисканні на Watched
function onWatchedBtnClick() {
  const movieWatched = gettingItem('movieWatched');
  if (movieWatched.length === 0) {
    movieListEl.innerHTML = '<p>Ви ще не переглянули жодного фільму</p>';
    return;
  }
  const moviesCards = movieWatched
    .map(movie => {
      return renderMovies(movie);
    })
    .join('');
  movieListEl.innerHTML = moviesCards;
  console.log(movieWatched);
}

watchedBtnEl.addEventListener('click', onWatchedBtnClick);
// queueBtnEl.addEventListener('click', onQueueBtnClick);

function renderMovies(movie) {
  const { poster_path, title, genre_ids, release_date, vote_average } = movie;
  let poster = `${TmdbAPI.IMG_BASE_URL}${poster_path}`;
  let releaseDate = `${release_date.slice(0, 4)}`;
  console.log(poster);

  // якщо немає постера
  if (!poster_path) {
    poster = `${emptyphoto}`;
  }

  if (!release_date) {
    releaseDate = `-`;
  }

  const va = +vote_average.toFixed(1);
  console.log(typeof va);

  const genres = genre_ids.map(el => el.id);
  //   console.log(genres);
  const markUp = `
	<li class='trending-gallery__item'>
    <img src="${poster}" alt="The poster of ${title} film" class="trending-gallery__image" />
    <div class="trending-gallery__wrapper">
    	<h3 class='trending-gallery__title'>${title}</h3>
    	<p class='trending-gallery__info'>${TmdbAPI.getGenresString(
        genres
      )} | <span class='find-by-year-js'>${releaseDate}</span> <span class='movie-rating'>${va}</span></p>
    </div>
  </li>
	`;

  console.log(markUp);
  return markUp;
}

// localStorage functions
function gettingItem(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.log('Everyone makes mistakes, this is yours:', error.message);
  }
}

function settingItem(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.log('Everyone makes mistakes, this is yours:', error.message);
  }
}

// function removingItem(key) {
//   try {
//     localStorage.removeItem(key);
//   } catch (error) {
//     console.log('Everyone makes mistakes, this is yours:', error.message);
//   }
// }
