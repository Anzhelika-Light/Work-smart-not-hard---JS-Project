import fetchPopularFilms from './fetch-movies';
import getImages from './fetch-images-url';
import getGenres from './fetch-genres';
// import { isTrendingFilmsShown } from '../../index.js';
import {
  renderPaginationInterface,
  paginationSettings,
  tooglePagination,
} from '../pagination/paginationInterface';
import { spinnerStart, spinnerStop } from '../loader';

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
            alt="The poster of ${item.title} film"
            class="trending-gallery__image" />
      <div class="trending-gallery__wrapper">
      <h3 class="trending-gallery__title">${item.title}</h3>
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
    spinnerStart();
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
  } finally {
    setTimeout(() => {
      spinnerStop();
    }, 1000);
  }
}

renderPopularFilms(1);

export default renderPopularFilms;
