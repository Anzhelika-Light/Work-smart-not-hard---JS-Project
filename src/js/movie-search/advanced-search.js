import makeHMTLString from '../templates/film_gallery_template';
import {
  refs,
  tmdbAPI,
  TmdbAPI,
  scrollToTop,
  emptyStingRegEx,
  Notify,
} from './search-refs';

refs.searchForm.addEventListener('click', showAdvancedSearch);
refs.searchForm.addEventListener('click', hideAdvancedSearch);

function showAdvancedSearch(event) {
  console.dir(event.target);
  if (!event.target.classList.value.includes('show-advanced-search-js')) return;
  toggleAdvancedSearch();
}

function hideAdvancedSearch(event) {
  if (!event.target.classList.value.includes('hide-advanced-search-js')) return;
  toggleAdvancedSearch();
}

function makeAdvancedSearch() {
  // console.log('search advanced');
  tmdbAPI
    .fetchAdvancedMovieSearch({ primary_release_year: 2022 })
    .then(console.log);
}

function toggleAdvancedSearch() {
  refs.advancedSearchEl.classList.toggle('visually-hidden');
  refs.showAdvancedSearchEl.parentNode.classList.toggle('visually-hidden');
  refs.hideAdvancedSearchEl.parentNode.classList.toggle('visually-hidden');
}
