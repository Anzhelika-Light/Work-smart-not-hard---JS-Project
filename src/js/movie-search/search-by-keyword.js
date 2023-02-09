import makeHMTLString from '../templates/film_gallery_template';
import { refs, tmdbAPI, TmdbAPI, emptyStingRegEx, Notify } from './search-refs';
import {
  renderPaginationInterface,
  paginationSettings,
  deletePaginationInterface,
  tooglePagination,
} from '../pagination/paginationInterface';

import renderPopularFilms from '../trending-search-main/trending-search';

export let userQueryforPagination = '';
refs.searchForm.addEventListener('submit', onSearchInputElChange);

async function onSearchInputElChange(event) {
  event.preventDefault();
  deletePaginationInterface();
  console.log(
    'перевірка чи перед цим сабмітом був рендер трендингових фільмів',
    tooglePagination.isTrendingFilmsShown
  );
  const query = refs.searchInputEl.value;
  userQueryforPagination = query;
  console.log('що шукає користувач?', userQueryforPagination);
  refs.searchInputEl.value = '';
  //if input is an empty string - return
  if (emptyStingRegEx.test(query)) return;
  try {
    console.log(
      'що БУЛО у налаштуваннях пагінації у total__pages до сабміту форми',
      paginationSettings.totalPages
    );
    tmdbAPI.page = 1;
    const response = await tmdbAPI.fetchFilmsByQuery(query);
    console.log(
      'яка сторінка фільмів ЗА ЗАПИТОМ користувача відображається ',
      tmdbAPI.page
    );
    const { data } = response;

    //if nothing found by entered keyword - show trending
    if (data.total_results === 0) {
      Notify.failure(
        'Search result not successful. Enter the correct movie name and try again!'
      );
      // const trending = await tmdbAPI.fetchTrending(
      //   TmdbAPI.media_type.MOVIE,
      //   TmdbAPI.time_window.WEEK
      // );

      // paginationSettings.totalPages = data.total_pages;
      // console.log(
      //   'cтало у пагінації у total__pages',
      //   paginationSettings.totalPages
      // );
      // refs.galleryEl.innerHTML = makeHMTLString(trending.data);
      console.log('показуємо першу сторінку трендових фільмів');
      renderPopularFilms(1);

      return;
    }
    //inserting images into gallery
    refs.galleryEl.innerHTML = makeHMTLString(data);
    tooglePagination.isTrendingFilmsShown = false;
    console.log(
      'після сабміту показуются трендінгові фільми?',
      tooglePagination.isTrendingFilmsShown
    );
    console.log('обэкт що прийшов із сервера за результатом запиту', data);
    paginationSettings.totalPages = data.total_pages;
    console.log(
      'що СТАЛО у налаштуваннях пагінації у total__pages',
      paginationSettings.totalPages
    );
    renderPaginationInterface(tmdbAPI.page, paginationSettings.totalPages);
  } catch (error) {
    console.error(error);
  }
}
