import fetchPopularFilms from './fetch-movies';
import getImages from './fetch-images-url';
import getGenres from './fetch-genres';

import { renderPaginationInterface } from '../pagination/paginationInterface';
import { paginationSettings } from '../pagination/paginationInterface';

const cardList = document.querySelector('.trending-gallery');

async function createMarkup(data) {
  try {
    const imageBaseURL = await getImages();
    const genreNames = await getGenres();

    const markup = data
      .map(item => {
        let genres = '';
        const genresNamesToRender = getGenreDeciphered(item, genreNames);
        console.log(genresNamesToRender);
        if (genresNamesToRender.length > 2) {
          genres = `${genresNamesToRender[0]}, ${genresNamesToRender[1]}, Other | `;
        } else if (genresNamesToRender.length === 2) {
          genres = `${genresNamesToRender[0]}, ${genresNamesToRender[1]} | `;
        } else if (genresNamesToRender.length === 1) {
          genres = `${genresNamesToRender} | `;
        } else {
          genres = genresNamesToRender;
        }
        return `<li class="trending-gallery__item">
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
    const films = await fetchPopularFilms(page);
    console.log('films', films);
    const markup = await createMarkup(films.results);
    cardList.innerHTML = markup;
    paginationSettings.totalPages = films.total_pages;
    console.log(typeof page);

    if (films) renderPaginationInterface(page, films.total_pages);
  } catch (error) {
    console.dir(error);
  }
}

renderPopularFilms(1);

export default renderPopularFilms;
