import TmdbAPI from './getMovies';
import emptyPhoto from '../images/testEmptyPhoto.png';

const watchedBtnEl = document.querySelector('.js-library-btn--watched');
const queueBtnEl = document.querySelector('.js-library-btn--queue');
const movieListEl = document.querySelector('.movie-list');

const tmdbAPI = new TmdbAPI();

const movies = [];

async function onWatchedBtnClick(e) {
  console.log('watched');
  try {
    const moviesRawData = await tmdbAPI.fetchFilmsByQuery('drama');
    const moviesData = moviesRawData.data.results;
    console.log(moviesData[0].poster_path);

    for (let index = 0; index < 15; index++) {
      const poster_path = moviesData[index].poster_path;
      const release_date = moviesData[index].release_date;
      const original_title = moviesData[index].original_title;
      const title = moviesData[index].title;
      const genre_ids = moviesData[index].genre_ids;
      const vote_average = moviesData[index].vote_average;

      movies.push({
        poster_path,
        release_date,
        original_title,
        title,
        genre_ids,
        vote_average,
      });
    }

    const movieCard = renderSearchResult(movies);
    movieListEl.innerHTML = movieCard;
    console.log(movies);
  } catch (err) {
    console.log(err);
  }
}

function onQueueBtnClick(e) {
  console.log('queue');
}

watchedBtnEl.addEventListener('click', onWatchedBtnClick);
queueBtnEl.addEventListener('click', onQueueBtnClick);

function renderSearchResult(movies) {
  return movies.map(
    (
      {
        poster_path,
        release_date,
        original_title,
        title,
        genre_ids,
        vote_average,
      },
      idx
    ) => {
      const { poster, releaseYear } = checkDataBeforeRender(
        poster_path,
        release_date
      );
      const movieTitle = title || original_title || 'No Title';
      const movieGenres = findGenres(genre_ids) || 'No Genre';
      return `<div class="main-section__card" id="${idx}" data-id="${idx}" data-rating="${vote_average}">
            <img
              src="${poster}"
              alt="${movieTitle}"
              class="main-section__image"
              loading="lazy"
            />
          <p class="main-section__name">
          ${movieTitle} <br />
          <span class="main-section__description">${movieGenres} | ${releaseYear}</span>
        </p>
        </div>`;
    }
  );
}
function checkDataBeforeRender(poster_path, releaseDate) {
  let poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
  let releaseYear;
  if (!poster_path) {
    poster = emptyPhoto;
  }
  if (!releaseDate) {
    releaseYear = 'No release year';
  } else {
    releaseYear = new Date(releaseDate).getFullYear();
  }
  return { poster, releaseYear };
}
function findGenres(ids) {
  const genres = JSON.parse(localStorage.getItem('allGenres')) || [];
  let res = [];
  for (const item of ids) {
    const genre = genres.find(g => g.id === item);
    if (genre) {
      const genreName =
        genre.name !== 'Science Fiction' ? genre.name : 'Sci-Fi';
      res.push(genreName);
    }
  }
  const formattedGenres =
    res.length > 2 ? `${res[0]}, ${res[1]}, Other` : res.join(', ');
  return formattedGenres;
}

// let movieArr = gettingItem();

// function gettingItem(movieId) {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.log('Everyone makes mistakes, this is yours:', error.message);
//   }
// }

// function settingItem(key, value) {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//   } catch (error) {
//     console.log('Everyone makes mistakes, this is yours:', error.message);
//   }
// }

// function removingItem(key) {
//   try {
//     localStorage.removeItem(key);
//   } catch (error) {
//     console.log('Everyone makes mistakes, this is yours:', error.message);
//   }
// }
