import {
  paginationSettings,
  deletePaginationInterface,
} from './js/pagination/paginationInterface';
import './js/pagination/setPaginationSettings';
import renderPopularFilms from './js/trending-search-main/trending-search';
import './js/trending-search-main/trending-search';
import './js/dark-mode';

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
import './js/footer-modal';
