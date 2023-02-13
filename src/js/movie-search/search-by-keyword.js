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

export const userSearchObj = {
  userQueryForPagination: '',
  userYearForPagination: '',
  userGenreForPagination: '',
};

// export let userQueryForPagination = '';
searchRefs.searchForm.addEventListener('submit', onSearchInputElChange);

async function onSearchInputElChange(event) {
  event.preventDefault();
  deletePaginationInterface();
  searchRefs.advancedSearchChosenWindowEl.classList.add('visually-hidden');
  const query = searchRefs.searchInputEl.value;
  userSearchObj.userQueryForPagination = query;

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

    //showing search parameters window
    searchRefs.advancedSearchChosenWindowEl.classList.remove('visually-hidden');
    searchRefs.advancedSearchChosenEl.innerHTML = `<div class='advanced-search__chosen-option'><span class='advanced-search__search-key'>search word: </span>${query}</div>`;
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
