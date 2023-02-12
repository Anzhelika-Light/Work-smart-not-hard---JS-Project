import fetchPopularFilms from './fetch-movies';
import getImages from './fetch-images-url';
import getGenres from './fetch-genres';

import ultimatePagination from 'ultimate-pagination';
import { userSearchObj } from '../movie-search/search-by-keyword';
// import { userQueryForPagination } from '../movie-search/search-by-keyword';
// import { userYearForPagination } from '../movie-search/search-by-year.js';
// import { userGenreForPagination } from '../movie-search/search-by-genre.js';
import {
  userAdvancedSearchForPagination,
  makeAdvancedSearch,
} from '../movie-search/advanced-search.js';
// import { makeAdvancedSearch } from '../movie-search/advanced-search.js';
import { spinnerStart, spinnerStop } from '../loader';
import { refs } from '../refs';
import { searchRefs, tmdbAPI, scrollToTop } from '../movie-search/search-refs';
import makeHMTLString from '../templates/film_gallery_template';

export const tooglePagination = {
  isTrendingFilmsShown: true,
  isFilmsByQueryShown: false,
  isFilmsByYearShown: false,
  isFilmsByGenreShown: false,
  isFilmsByAdvancedSearchShown: false,
};
export const paginationSettings = {
  currentPage: 0,
  totalPages: 0,
  boundaryPagesRange: 1,
  siblingPagesRange: 2,
  hideEllipsis: false,
  hidePreviousAndNextPagebtns: false,
  hideFirstAndLastPagebtns: true,
};

let screen = window.matchMedia('(max-width: 767px)');
setPaginationSettings(screen.matches);
screen.addEventListener('change', onChange);

const cardList = document.querySelector('.trending-gallery');

async function createMarkup(data) {
  try {
    const imageBaseURL = await getImages();
    const genreNames = await getGenres();

    const markup = data
      .map(item => {
        let genres = '';
        const genresNamesToRender = getGenreDeciphered(item, genreNames);

        if (genresNamesToRender.length > 2) {
          genres = `<a class='find-by-genre-js trending-gallery__genre-name'>${genresNamesToRender[0]}</a>, <a class='find-by-genre-js trending-gallery__genre-name'>${genresNamesToRender[1]}</a>, Other | `;
        } else if (genresNamesToRender.length === 2) {
          genres = `<a class='find-by-genre-js trending-gallery__genre-name'>${genresNamesToRender[0]}</a>, <a class='find-by-genre-js trending-gallery__genre-name'>${genresNamesToRender[1]}</a> | `;
        } else if (genresNamesToRender.length === 1) {
          genres = `<a class='find-by-genre-js trending-gallery__genre-name'>${genresNamesToRender}</a> | `;
        } else {
          genres = genresNamesToRender;
        }
        return `<li class="trending-gallery__item" data-id="${item.id}">
                  <a href="#" class="trending-gallery__link">
                    <div>
                        <img src="${imageBaseURL}${item.poster_path}"
                            class="trending-gallery__image" data-id="${item.id}"
                            alt="The poster of ${
                              item.title
                            } film " onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80';"
                            />

                    </div>            
                    <div class="trending-gallery__wrapper">
                        <h3 class="trending-gallery__title" ><span class="title-modal-open" data-id="${
                          item.id
                        }">${item.title}</span>
                        </h3>
                              <p class="trending-gallery__info">${genres}
                              <span class="find-by-year-js">${item.release_date.slice(
                                0,
                                4
                              )}</span>
                              </p>
                    </div>
                  </a>
                </li>`;
      })
      .join('');
    return markup;
  } catch (error) {
    console.log(error);
  }
}

function getGenreDeciphered(filmObject, genresList) {
  const genreArray = filmObject.genre_ids;
  const genreNamesToRender = genreArray.map(item => {
    return genresList[item];
  });
  return genreNamesToRender;
}

async function renderPopularFilms(page) {
  try {
    cardList.innerHTML = '';
    spinnerStart();
    const films = await fetchPopularFilms(page);

    const markup = await createMarkup(films.results);

    cardList.innerHTML = markup;
    paginationSettings.totalPages = films.total_pages;
    tooglePagination.isTrendingFilmsShown = true;

    if (films) renderPaginationInterface(page, paginationSettings.totalPages);
  } catch (error) {
    console.dir(error);
  } finally {
    setTimeout(() => {
      spinnerStop();
    }, 1000);
  }
}

renderPopularFilms(1);
export default renderPopularFilms;

export function deletePaginationInterface() {
  refs.paginationContainer.removeEventListener('click', onLoadAnotherPage);
  refs.filmsPaginationContainer.innerHTML = '';
}

export function renderPaginationInterface(currentPage, totalPages) {
  refs.filmsPaginationContainer.innerHTML = createPaginationInterface(
    currentPage,
    totalPages
  );
  refs.paginationContainer = document.querySelector('.pagination__container');
  refs.paginationContainer.addEventListener('click', onLoadAnotherPage);
}

function onChange() {
  const { currentPage, totalPages } = paginationSettings;
  setPaginationSettings(screen.matches);
  renderPaginationInterface(currentPage, totalPages);
}

async function onLoadAnotherPage(e) {
  try {
    deletePaginationInterface();
    const clickedBtn = e.target;
    const indexOfPageToLoad = Number(clickedBtn.dataset.value);

    if (tooglePagination.isTrendingFilmsShown) {
      await renderPopularFilms(indexOfPageToLoad);
      scrollToTop();
      spinnerStart();
      return;
    } else if (tooglePagination.isFilmsByQueryShown) {
      tmdbAPI.page = indexOfPageToLoad;

      const response = await tmdbAPI.fetchFilmsByQuery(
        userSearchObj.userQueryForPagination
      );
      scrollToTop();
      spinnerStart();
      const { data } = response;

      searchRefs.galleryEl.innerHTML = makeHMTLString(data);
      renderPaginationInterface(tmdbAPI.page, paginationSettings.totalPages);
      return;
    } else if (tooglePagination.isFilmsByYearShown) {
      tmdbAPI.page = indexOfPageToLoad;
      const response = await tmdbAPI.fetchMoviesByYear(
        userSearchObj.userYearForPagination
      );
      scrollToTop();
      spinnerStart();
      const { data } = response;

      searchRefs.galleryEl.innerHTML = makeHMTLString(data);
      renderPaginationInterface(tmdbAPI.page, paginationSettings.totalPages);
      return;
    } else if (tooglePagination.isFilmsByGenreShown) {
      tmdbAPI.page = indexOfPageToLoad;
      const response = await tmdbAPI.fetchMoviesByGenre(
        userSearchObj.userGenreForPagination
      );
      scrollToTop();
      spinnerStart();
      const { data } = response;

      searchRefs.galleryEl.innerHTML = makeHMTLString(data);
      renderPaginationInterface(tmdbAPI.page, paginationSettings.totalPages);
      return;
    } else if (tooglePagination.isFilmsByAdvancedSearchShown) {
      userAdvancedSearchForPagination.page = indexOfPageToLoad;
      tmdbAPI.page = indexOfPageToLoad;

      scrollToTop();
      spinnerStart();
      searchRefs.galleryEl.innerHTML = makeAdvancedSearch(
        userAdvancedSearchForPagination
      );
      return;
    }
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(spinnerStop, 1000);
  }
}

function createPaginationInterface(currentPage, totalPages) {
  paginationSettings.currentPage = currentPage;
  paginationSettings.totalPages = totalPages;

  const pagination = ultimatePagination.getPaginationModel(paginationSettings);

  const btnsMarkup = pagination.map(createBtn).join('');

  return `<ul class="pagination__container">${btnsMarkup}</ul>`;
}

function createBtn(btnType) {
  const { type, value, isActive, key } = btnType;
  let modifier;
  switch (type) {
    case 'PREVIOUS_PAGE_LINK':
      modifier = '--prev';
      return isActive
        ? createIconBtnTemplate(modifier, value, 'disabled')
        : createIconBtnTemplate(modifier, value);

    case 'NEXT_PAGE_LINK':
      modifier = '--next';
      return isActive
        ? createIconBtnTemplate(modifier, value, 'disabled')
        : createIconBtnTemplate(modifier, value);

    case 'ELLIPSIS':
      modifier = '--ellipsis';
      return createIconBtnTemplate(modifier, value);

    case 'PAGE':
      modifier = '--active';
      return createDigitBtnTemplate(modifier, value, isActive, 'disabled');
  }
}

function setMobilePaginationSettings() {
  paginationSettings.boundaryPagesRange = 0;
  paginationSettings.hideEllipsis = true;
}

function setStandartPaginationSettings() {
  paginationSettings.boundaryPagesRange = 1;
  paginationSettings.hideEllipsis = false;
}

function setPaginationSettings(isMobile) {
  if (isMobile) {
    setMobilePaginationSettings();
  } else {
    setStandartPaginationSettings();
  }
}

function createIconBtnTemplate(modifier, value, disabled = '') {
  return ` <li class="pagination__element">
          <button type="button" class="pagination__btn pagination__btn${modifier}" data-value=${value} ${disabled}></button>
        </li>`;
}
function createDigitBtnTemplate(modifier, value, isActive, disabled) {
  return isActive
    ? ` <li class="pagination__element">
          <button type="button" class="pagination__btn pagination__btn${modifier}" data-value=${value} ${disabled}>${value}</button>
        </li>`
    : ` <li class="pagination__element">
       <button type="button" class="pagination__btn" data-value=${value}>${value}</button>
     </li>`;
}
