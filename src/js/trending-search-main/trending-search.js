import fetchPopularFilms from './fetch-movies';
import getImages from './fetch-images-url';
import getGenres from './fetch-genres';
// import { isTrendingFilmsShown } from '../../index.js';
import {
  renderPaginationInterface,
  paginationSettings,
  tooglePagination,
} from '../pagination/paginationInterface';

const cardList = document.querySelector('.trending-gallery');

async function createMarkup(data) {
  try {
    const imageBaseURL = await getImages();
    const genreNames = await getGenres();

    const markup = data
      .map(item => {
        let genres = '';
        const genresNamesToRender = getGenreDeciphered(item, genreNames);
        // console.log(genresNamesToRender);
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
      <img src="${imageBaseURL}${item.poster_path}"

            
            class="trending-gallery__image" data-id="${item.id}"

            alt="The poster of ${item.title} film "
            onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80';"
             />

      <div class="trending-gallery__wrapper">
      <h3 class="trending-gallery__title" data-id="${item.id}">${
          item.title
        }</h3>
      <p class="trending-gallery__info">${genres}<span>${item.release_date.slice(
          0,
          4
        )}</span></p>
      </div>
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
    const films = await fetchPopularFilms(page);
    console.log('який обэкт фільмів прийшов від сервера', films);

    const markup = await createMarkup(films.results);

    cardList.innerHTML = markup;

    paginationSettings.totalPages = films.total_pages;
    tooglePagination.isTrendingFilmsShown = true;

    if (films) renderPaginationInterface(page, paginationSettings.totalPages);
    console.log(
      'в налаштуваннях пагінації поточна сторінка',
      paginationSettings.currentPage
    );
    console.log(
      'в налаштуваннях пагінації всього сторінок',
      paginationSettings.totalPages
    );
  } catch (error) {
    console.dir(error);
  }
}

renderPopularFilms(1);

export default renderPopularFilms;
