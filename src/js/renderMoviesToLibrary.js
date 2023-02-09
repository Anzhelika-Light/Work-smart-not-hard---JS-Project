import TmdbAPI from './TMDB_API';

const movieWatchedToLocalStorage = [10992, 10992];
const movieQueueToLocalStorage = [10994, 10995];
// localStorage.clear();
settingItem('movieWatched', movieWatchedToLocalStorage);
settingItem('movieQueue', movieWatchedToLocalStorage);

const watchedBtnEl = document.querySelector('.js-library-btn--watched');
const queueBtnEl = document.querySelector('.js-library-btn--queue');
const movieListEl = document.querySelector('.movie-list');

const tmdbAPI = new TmdbAPI();

// const movieQueue = gettingItem('movieQueue');

async function onWatchedBtnClick() {
  const movieWatched = gettingItem('movieWatched');
  try {
    const allWatchedMoviesArr = movieWatched.map(async movieID => {
      const movieData = await tmdbAPI.fetchFilmByID(movieID);
      const movieCard = renderMovies(movieData);

      console.dir(movieCard);

      return movieData;
    });
    console.log(allWatchedMoviesArr);
  } catch (error) {
    console.log(error);
  }
}

watchedBtnEl.addEventListener('click', onWatchedBtnClick);

function renderMovies(movieData) {
  //   console.log(movieData.data);
  const genre_ids = movieData.data.genres.map(el => el.id);
  //   console.log(genre_ids);
  const markUp = `
	<li>
    <img src="${TmdbAPI.IMG_BASE_URL}${
    movieData.data.poster_path
  }" alt="The poster of ${
    movieData.data.title
  } film" class="trending-films-gallery-image" />
    <div class="gallery-info-wrapper">
    	<h3>${movieData.data.title}</h3>
    	<p>${TmdbAPI.getGenresString(
        genre_ids
      )} | <span class='find-by-year-js'>${movieData.data.release_date.slice(
    0,
    4
  )}</span></p>
    </div>
  </li>
	`;

  //   console.log(markUp);
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
