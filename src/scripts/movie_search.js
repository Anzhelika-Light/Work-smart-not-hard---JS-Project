import { Notify } from 'notiflix';
import TmdbAPI from './TMDB_API';
import makeHMTLString from './templates/film_gallery_template';

const emptyStingRegEx = /^\s*$/; // regular expression of an empty string
const tmdbAPI = new TmdbAPI();

const refs = {
  galleryEl: document.querySelector('.gallery'),
  searchInputEl: document.querySelector('#movie-search'),
};
refs.searchInputEl.addEventListener('change', onSearchInputElChange);

async function onSearchInputElChange() {
  const query = refs.searchInputEl.value;
  //if input is an empty string - return
  if (emptyStingRegEx.test(query)) return;

  try {
    const response = await tmdbAPI.fetchFilmsByQuery(query);
    const { data } = response;
    console.log('data', data);
    if (data.total_results === 0) {
      Notify.failure(
        'Search result not successful. Enter the correct movie name and try again!'
      );
    }
    //inserting images into gallery
    refs.galleryEl.insertAdjacentHTML('beforeend', makeHMTLString(data));
  } catch (error) {
    console.error(error);
  }
}

// async function getFilmsByQuery(query) {

// }

tmdbAPI.fetchFilmsByID('10992').then(console.log);
