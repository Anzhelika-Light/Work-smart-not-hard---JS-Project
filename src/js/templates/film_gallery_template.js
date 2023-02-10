import TmdbAPI from '../TMDB_API';

//converts string with genre names to HTML string with tags
function getGenresHTMLString(str) {
  if (!str || str === '') {
    return `<a>Other</a>`;
  }
  const indexOfOther = str.toLowerCase().indexOf('other');
  let spliced = '';
  if (indexOfOther !== -1) {
    str = str.slice(0, indexOfOther);
    spliced = 'Other';
  }
  console.log('genres-str: ', str);
  return (
    str
      .split(',')
      .map(el => {
        return `<a class='find-by-genre-js trending-gallery__genre-name'>${el}</a>`;
      })
      .join(', ') + spliced
  );
}

export default function makeHMTLString({ results }) {
  // console.log(results);
  return results
    .map(result => {
      //checking release date: if none - return 'No info', else return year
      if (!result.release_date || result.release_date === '') {
        result.release_date = 'No info';
      } else {
        result.release_date = result.release_date.slice(0, 4);
      }
      return `
	<li class='trending-gallery__item' data-id="${result.id}">
    <img src="${TmdbAPI.IMG_BASE_URL}${
        result.poster_path
      }" alt="The poster of ${
        result.title
      } film" class="trending-gallery__image" />
    <div class="trending-gallery__wrapper">
    	<h3 class='trending-gallery__title'>${result.title}</h3>
    	<p class='trending-gallery__info'>${getGenresHTMLString(
        TmdbAPI.getGenresString(result.genre_ids)
      )} | <span class='find-by-year-js'>${result.release_date}</span></p>
    </div>
  </li>
	`;
    })
    .join('');
}

export function makeHMTLStringWithGenre({ results }, genre) {
  return results
    .map(result => {
      //checking release date: if none - return 'No info', else return year
      if (!result.release_date || result.release_date === '') {
        result.release_date = 'No info';
      } else {
        result.release_date = result.release_date.slice(0, 4);
      }

      return `
	<li class='trending-gallery__item'  data-id="${result.id}">
    <img src="${TmdbAPI.IMG_BASE_URL}${
        result.poster_path
      }" alt="The poster of ${
        result.title
      } film" class="trending-gallery__image" />
    <div class="trending-gallery__wrapper">
    	<h3 class='trending-gallery__title'>${result.title}</h3>
    	<p class='trending-gallery__info'>${getGenresHTMLString(
        TmdbAPI.getGenresStringWithSearchedGenre(result.genre_ids, genre)
      )} | <span class='find-by-year-js'>${result.release_date.slice(
        0,
        4
      )}</span></p>
    </div>
  </li>
	`;
    })
    .join('');
}
