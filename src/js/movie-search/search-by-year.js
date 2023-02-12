import makeHMTLString from '../templates/film_gallery_template';
import { searchRefs, tmdbAPI, scrollToTop, Notify } from './search-refs';
import {
  renderPaginationInterface,
  paginationSettings,
  deletePaginationInterface,
  tooglePagination,
} from '../trending-search-main/trending-search.js';

import { userSearchObj } from './search-by-keyword';

// import { userQueryForPagination } from './search-by-keyword';
// import { userGenreForPagination } from './search-by-genre';
//find movies by year
searchRefs.galleryEl.addEventListener('click', findMoviesByYear);
// export let userYearForPagination = '';

function findMoviesByYear(event) {
  //if not find-by-genre-js link - return
  if (![...event.target.classList].includes('find-by-year-js')) return;

  if (tooglePagination.isFilmsByYearShown) {
    Notify.info('Movies of this year are already shown');
    return;
  }

  deletePaginationInterface();

  scrollToTop();
  let year = Number(event.target.innerText);
  userSearchObj.userQueryForPagination = '';
  userSearchObj.userYearForPagination = year;

  tmdbAPI.page = 1;

  tmdbAPI
    .fetchMoviesByYear(year)
    .then(response => {
      const { data } = response;

      if (data.total_results === 0) {
        Notify.failure('Search result not successful.');
      }

      scrollToTop();
      //inserting images into gallery
      searchRefs.galleryEl.innerHTML = makeHMTLString(data);
      tooglePagination.isTrendingFilmsShown = false;
      tooglePagination.isFilmsByQueryShown = false;
      tooglePagination.isFilmsByGenreShown = false;
      tooglePagination.isFilmsByAdvancedSearchShown = false;
      tooglePagination.isFilmsByYearShown = true;
      console.log(
        'обэкт що прийшов із сервера за результатом запиту за РОКОМ',
        data
      );
      if (data.total_pages > 500) {
        paginationSettings.totalPages = 500;
      } else {
        paginationSettings.totalPages = data.total_pages;
      }

      renderPaginationInterface(tmdbAPI.page, paginationSettings.totalPages);
    })
    .catch(error => {
      console.error(error);
      Notify.failure('No films with such year found!');
    });
}
