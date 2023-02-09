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
import './js/loader';
import { refs, tmdbAPI, TmdbAPI } from './js/movie-search/search-refs';
import { userQueryforPagination } from './js/movie-search/search-by-keyword';
import makeHMTLString from './js/templates/film_gallery_template';
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
}
import './js/movie_search';
import { studentCards } from './js/footer-modal';

// import Darkmode from 'darkmode-js';
// //https://darkmodejs.learn.uno

// // const options = {
// //   bottom: '64px', // default: '32px'
// //   right: 'unset', // default: '32px'
// //   left: '32px', // default: 'unset'
// //   time: '0.5s', // default: '0.3s'
// //   mixColor: '#fff', // default: '#fff'
// //   backgroundColor: '#fff', // default: '#fff'
// //   buttonColorDark: '#100f2c', // default: '#100f2c'
// //   buttonColorLight: '#fff', // default: '#fff'
// //   saveInCookies: false, // default: true,
// //   label: '🌓', // default: ''
// //   autoMatchOsTheme: true, // default: true
// // };

// const options = {
//   autoMatchOsTheme: false,
// };
// const darkmode = new Darkmode(options);
// darkmode.showWidget();
