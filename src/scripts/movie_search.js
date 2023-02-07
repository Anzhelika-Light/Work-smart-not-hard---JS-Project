import { Notify } from 'notiflix';
import TmdbAPI from './TMDB_API';

const emptyStingRegEx = /^\s*$/; // regular expression of an empty string
const tmdbAPI = new TmdbAPI();

const searchInputEl = document.querySelector('#movie-search');
searchInputEl.addEventListener('change', onSearchInputElChange);

function onSearchInputElChange() {
  const query = searchInputEl.value;
  //if input is an empty string - return
  if (emptyStingRegEx.test(query)) return;
  getFilmsByQuery(query);
}

async function getFilmsByQuery(query) {
  try {
    const response = await tmdbAPI.fetchFilmsByQuery(query);
    const { data } = response;
    console.log('data', data);
    if (data.total_results === 0) {
      Notify.failure(
        'Search result not successful. Enter the correct movie name and try again!'
      );
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}
