import {
  paginationSettings,
  deletePaginationInterface,
} from './js/pagination/paginationInterface';
import './js/pagination/setPaginationSettings';
import renderPopularFilms from './js/trending-search-main/trending-search';
import './js/trending-search-main/trending-search';
import './js/dark-mode';
import './js/loader';
import './js/render_markup.js';
import './js/render_modal.js';
import './js/trending-search-main/trending-search.js';
import './js/movie_modal.js';

export async function onLoadAnotherPage(e) {
  try {
    console.log('click');
    deletePaginationInterface();
    const clickedBtn = e.target;
    const indexOfPageToLoad = Number(clickedBtn.dataset.value);
    await renderPopularFilms(indexOfPageToLoad);
  } catch (error) {
    console.log(error);
  }
}
import './js/movie_search';
import { studentCards } from './js/footer-modal';
