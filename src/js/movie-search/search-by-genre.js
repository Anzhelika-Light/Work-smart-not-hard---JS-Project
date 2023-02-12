import { makeHMTLStringWithGenre } from '../templates/film_gallery_template';
import {
  searchRefs,
  tmdbAPI,
  TmdbAPI,
  scrollToTop,
  Notify,
} from './search-refs';
import {
  renderPaginationInterface,
  paginationSettings,
  deletePaginationInterface,
  tooglePagination,
} from '../trending-search-main/trending-search.js';
// import { userQueryForPagination } from './search-by-keyword';
// import { userYearForPagination } from './search-by-year';
import { CLIENT_RENEG_LIMIT } from 'tls';
import { userSearchObj } from './search-by-keyword';

// export let userGenreForPagination = '';

//find movies by genre
searchRefs.galleryEl.addEventListener('click', findMoviesByGenre);
let genreID;
function findMoviesByGenre(event) {
  if (tooglePagination.isFilmsByAdvancedSearchShown) {
    searchRefs.advancedSearchEl.reset();
  }
  if (![...event.target.classList].includes('find-by-genre-js'))
    //if not find-by-genre-js link - return
    return;

  let genre = event.target.innerText.trim();
  // console.dir(event.target);
  if (genre[genre.length - 1] === ',') {
    genre = genre.slice(0, -1);
  }

  if (
    genreID === TmdbAPI.genreIDs[genre.toLowerCase()] &&
    tooglePagination.isFilmsByGenreShown === true
  ) {
    Notify.info('Movies of this genre are already shown');
    return;
  }

  genreID = TmdbAPI.genreIDs[genre.toLowerCase()];

  deletePaginationInterface();
  userSearchObj.userGenreForPagination = genreID;
  tmdbAPI.page = 1;

  tmdbAPI
    .fetchMoviesByGenre(`${TmdbAPI.genreIDs[genre.toLowerCase()]}`)
    .then(response => {
      const { data } = response;

      if (data.total_results === 0) {
        Notify.failure('Search result not successful.');
      }
      scrollToTop();
      searchRefs.galleryEl.innerHTML = makeHMTLStringWithGenre(data, genre);
      tooglePagination.isTrendingFilmsShown = false;
      tooglePagination.isFilmsByQueryShown = false;
      tooglePagination.isFilmsByAdvancedSearchShown = false;
      tooglePagination.isFilmsByYearShown = false;
      tooglePagination.isFilmsByGenreShown = true;

      // console.log('findByYear', data);
      if (data.total_pages > 500) {
        paginationSettings.totalPages = 500;
      } else {
        paginationSettings.totalPages = data.total_pages;
      }
      //inserting images into gallery

      renderPaginationInterface(tmdbAPI.page, paginationSettings.totalPages);
    })
    .catch(error => {
      console.error(error);
      Notify.failure('No films with such genre found!');
    });
}
