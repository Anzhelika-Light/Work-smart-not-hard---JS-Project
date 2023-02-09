import { Notify } from 'notiflix';
import TmdbAPI from './TMDB_API';
import makeHMTLString from './templates/film_gallery_template';

const emptyStingRegEx = /^\s*$/; // regular expression of an empty string
const tmdbAPI = new TmdbAPI();

const refs = {
  galleryEl: document.querySelector('.trending-gallery'),
  searchInputEl: document.querySelector('.search__input'),
  searchForm: document.querySelector('.search'),
};

refs.searchForm.addEventListener('submit', onSearchInputElChange);

async function onSearchInputElChange(event) {
  event.preventDefault();
  const query = refs.searchInputEl.value;
  refs.searchInputEl.value = '';
  //if input is an empty string - return
  if (emptyStingRegEx.test(query)) return;

  try {
    const response = await tmdbAPI.fetchFilmsByQuery(query);
    const { data } = response;
    //console.log('data', data);
    if (data.total_results === 0) {
      Notify.failure(
        'Search result not successful. Enter the correct movie name and try again!'
      );
      // const trending = await tmdbAPI.fetchTrending(
      //   TmdbAPI.media_type.MOVIE,
      //   TmdbAPI.time_window.WEEK
      // );
      // refs.galleryEl.innerHTML = makeHMTLString(trending.data);
      // return;
    }
    //inserting images into gallery
    refs.galleryEl.innerHTML = makeHMTLString(data);
  } catch (error) {
    console.error(error);
  }
}

// tmdbAPI.fetchFilmByID('10992').then(data => console.log('findFilmByID', data));
// tmdbAPI
//   .fetchTrailersByID('10992')
//   .then(data => console.log('findTrailersByID', data));
// tmdbAPI.fetchMoviesByGenre('28').then(data => console.log('findByGenre', data));
// tmdbAPI.fetchMoviesByGenre('12').then(data => console.log('findByGenre', data));

//find movies by genre
refs.galleryEl.addEventListener('click', findMoviesByGenre);

function findMoviesByGenre(event) {
  //if not find-by-genre-js link - return
  if (![...event.target.classList].includes('find-by-genre-js')) return;
  let genre = event.target.innerText.trim();
  if (genre[genre.length - 1] === ',') {
    genre = genre.slice(0, -1);
  }
  scrollToTop();
  tmdbAPI
    .fetchMoviesByGenre(`${TmdbAPI.genreIDs[genre.toLowerCase()]}`)
    .then(response => {
      const { data } = response;
      //console.log('search-by-genre', data);
      if (data.total_results === 0) {
        Notify.failure('Search result not successful.');
      }
      //inserting images into gallery
      refs.galleryEl.innerHTML = makeHMTLString(data);
    })
    .catch(error => {
      console.error(error);
      Notify.failure('No films with such genre found!');
    });
}

//find movies by year
refs.galleryEl.addEventListener('click', findMoviesByYear);

function findMoviesByYear(event) {
  //if not find-by-genre-js link - return
  if (![...event.target.classList].includes('find-by-year-js')) return;
  scrollToTop();
  let year = Number(event.target.innerText);

  tmdbAPI
    .fetchMoviesByYear(year)
    .then(response => {
      const { data } = response;
      if (data.total_results === 0) {
        Notify.failure('Search result not successful.');
      }
      //inserting images into gallery
      refs.galleryEl.innerHTML = makeHMTLString(data);
      console.log('findByYear', data);
    })
    .catch(error => {
      console.error(error);
      Notify.failure('No films with such year found!');
    });
}

//scroll to the top of the page
function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
