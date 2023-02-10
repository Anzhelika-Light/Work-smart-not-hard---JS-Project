import {
  paginationSettings,
  renderPaginationInterface,
  deletePaginationInterface,
  tooglePagination,
} from './js/pagination/paginationInterface';
import './js/pagination/setPaginationSettings';
import renderPopularFilms from './js/trending-search-main/trending-search';
import './js/trending-search-main/trending-search';
import './js/dark-mode';
import { spinnerStart, spinnerStop } from './js/loader';
import { refs, tmdbAPI, TmdbAPI } from './js/movie-search/search-refs';
import { userQueryforPagination } from './js/movie-search/search-by-keyword';
import makeHMTLString from './js/templates/film_gallery_template';
import './js/render_markup.js';
import './js/render_modal.js';
import './js/trending-search-main/trending-search.js';
import './js/movie_modal.js';

export async function onLoadAnotherPage(e) {
  console.log('що було в полі пошуку', userQueryforPagination);
  console.log(
    'Чи показувалась сторінка із трендовими фільмами ДО кліку на цю кнопку пагінації?',
    tooglePagination.isTrendingFilmsShown
  );
  try {
    deletePaginationInterface();
    const clickedBtn = e.target;
    const indexOfPageToLoad = Number(clickedBtn.dataset.value);

    if (tooglePagination.isTrendingFilmsShown) {
      await renderPopularFilms(indexOfPageToLoad);
      spinnerStart();
    } else {
      console.log('перед кліком були показані не трендингові фільми');
      console.log(
        'яка сторінка фільмів за пошуком користувача відображалась ДО кліку на кнопку пагінації?',
        tmdbAPI.page
      );
      tmdbAPI.page = indexOfPageToLoad;
      console.log(
        'за якою сторінкою фільмів за пошуком користувача йде запит на сервер ПІСЛЯ кліку на кнопку?',
        tmdbAPI.page
      );
      const response = await tmdbAPI.fetchFilmsByQuery(userQueryforPagination);
      spinnerStart();
      const { data } = response;
      console.log(
        'що прийшло із сервера після кліку, якщо до цього відоражалась сторінка не з трендинговими фото?',
        data
      );
      refs.galleryEl.innerHTML = makeHMTLString(data);
      renderPaginationInterface(tmdbAPI.page, paginationSettings.totalPages);
    }
  } catch (error) {
    console.log(error);
  }
  setTimeout(spinnerStop, 1000);
}
import './js/movie_search';
import './js/footer-modal';
