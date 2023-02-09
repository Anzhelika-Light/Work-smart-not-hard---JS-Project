import makeHMTLString from '../templates/film_gallery_template';
import { refs, tmdbAPI, TmdbAPI, emptyStingRegEx, Notify } from './search-refs';

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

    //if nothing found by entered keyword - show trending
    if (data.total_results === 0) {
      Notify.failure(
        'Search result not successful. Enter the correct movie name and try again!'
      );
      const trending = await tmdbAPI.fetchTrending(
        TmdbAPI.media_type.MOVIE,
        TmdbAPI.time_window.WEEK
      );
      refs.galleryEl.innerHTML = makeHMTLString(trending.data);
      return;
    }
    //inserting images into gallery
    refs.galleryEl.innerHTML = makeHMTLString(data);
  } catch (error) {
    console.error(error);
  }
}
