import TmdbAPI from '../TMDB_API';

function getGenresHTMLString(str) {
  return str
    .split(' ')
    .map(el => {
      return `<a class='find-by-genre-js'>${el}</a>`;
    })
    .join(' ');
}

export default function makeHMTLString({ results }) {
  return results
    .map(
      result =>
        `
	<li class='trending-gallery__item'>
    <img src="${TmdbAPI.IMG_BASE_URL}${
          result.poster_path
        }" alt="The poster of ${
          result.title
        } film" class="trending-gallery__image" />
    <div class="trending-gallery__wrapper">
    	<h3 class='trending-gallery__title'>${result.title}</h3>
    	<p class='trending-gallery__info'>${getGenresHTMLString(
        TmdbAPI.getGenresString(result.genre_ids)
      )} | <span class='find-by-year-js'>${result.release_date.slice(
          0,
          4
        )}</span></p>
    </div>
  </li>
	`
    )
    .join('');
}
