import API_KEY from './api-key';
import BASE_URL from './base-url';
import fetchPopularFilms from './fetch-movies';
import getImages from './fetch-images-url';
import getGenres from './fetch-genres';

const cardList = document.querySelector('.trending-gallery');

async function createMarkup(data) {
  console.log('data results', data);
  const imageBaseURL = await getImages();

  const genreNames = await getGenres();
  console.log('genreNames in markup', genreNames);

  // const imageBaseURL = 'https://image.tmdb.org/t/p/original';
  console.log(imageBaseURL);

  const markup = data
    .map(item => {
      let genres = '';
      const genresNamesToRender = getGenreDeciphered(item, genreNames);
      if (genresNamesToRender.includes('Science Fiction')) {
        genres = `${genresNamesToRender[0]}, Other`;
      } else if (genresNamesToRender.length > 2) {
        genres = `${genresNamesToRender[0]}, ${genresNamesToRender[1]}, Other`;
      } else {
        genres = genresNamesToRender;
      }

      console.log('item', item);
      return `<li>
      <img src="${imageBaseURL}${item.poster_path}" 
            alt="The poster of ${item.title} film" 
            class="trending-gallery__image" />
      <div class="trending-gallery__wrapper">
      <h3 class="trending-gallery__title">${item.title}</h3>
      <p class="trending-gallery__info">${genres} | <span>${item.release_date.slice(
        0,
        4
      )}</span></p>
      </div>
      </li>`;
    })
    .join('');
  return markup;
}

function getGenreDeciphered(filmObject, genresList) {
  const genreArray = filmObject.genre_ids;

  const genreNamesToRender = genreArray.map(item => {
    return genresList[item];
  });

  console.log('genresToRender', genreNamesToRender);
  return genreNamesToRender;
}

async function renderPopularFilms() {
  try {
    const films = await fetchPopularFilms();
    console.log(films);
    const markup = await createMarkup(films);
    console.log(films);
    console.log(films.genre_ids);
    // console.log(markup);

    cardList.innerHTML = markup;
  } catch (error) {
    console.dir(error);
  }
}

renderPopularFilms();
