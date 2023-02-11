import makeHMTLString from '../templates/film_gallery_template';
import {
  searchRefs,
  tmdbAPI,
  TmdbAPI,
  emptyStingRegEx,
  Notify,
  scrollToTop,
} from './search-refs';

import {
  renderPaginationInterface,
  paginationSettings,
  deletePaginationInterface,
  tooglePagination,
} from '../trending-search-main/trending-search.js';

import renderPopularFilms from '../trending-search-main/trending-search';

export let userQueryForPagination = '';
searchRefs.searchForm.addEventListener('submit', onSearchInputElChange);

async function onSearchInputElChange(event) {
  event.preventDefault();
  deletePaginationInterface();
  const query = searchRefs.searchInputEl.value;
  userQueryForPagination = query;

  searchRefs.searchInputEl.value = '';
  //if input is an empty string - return
  if (emptyStingRegEx.test(query)) return;
  try {
    tmdbAPI.page = 1;
    const response = await tmdbAPI.fetchFilmsByQuery(query);
    const { data } = response;

    //if nothing found by entered keyword - show trending
    if (data.total_results === 0) {
      Notify.failure(
        'Search result not successful. Enter the correct movie name and try again!'
      );
      renderPopularFilms(1);
      return;
    }
    scrollToTop();
    //inserting images into gallery
    searchRefs.galleryEl.innerHTML = makeHMTLString(data);
    tooglePagination.isTrendingFilmsShown = false;
    tooglePagination.isFilmsByGenreShown = false;
    tooglePagination.isFilmsByYearShown = false;
    tooglePagination.isFilmsByAdvancedSearchShown = false;
    tooglePagination.isFilmsByQueryShown = true;
    paginationSettings.totalPages = data.total_pages;
    renderPaginationInterface(tmdbAPI.page, paginationSettings.totalPages);
  } catch (error) {
    console.error(error);
  }
}
