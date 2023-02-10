import emptyphoto from '../../images/empty-photo/empty-poster.jpg';
import TmdbAPI from '../TMDB_API';

export function renderMoviesLibrary(movie) {
  const { poster_path, title, genres, release_date, vote_average } = movie;
  let poster = `${TmdbAPI.IMG_BASE_URL}${poster_path}`;
  let releaseDate = `${release_date.slice(0, 4)}`;

  // якщо немає постера
  if (!poster_path) {
    poster = `${emptyphoto}`;
  }
  // якщо немає дати випуску
  if (!release_date) {
    releaseDate = `-`;
  }

  const voteAverageFixed = +vote_average.toFixed(1);

  // const genres = genre_ids.map(el => el.id);
  const markUp = `
	<li class='trending-gallery__item'>
    <img src="${poster}" alt="The poster of ${title} film" class="library-gallery__image" />
    <div class="trending-gallery__wrapper">
    	<h3 class='trending-gallery__title'>${title}</h3>
    	<p class='trending-gallery__info'>${genres.join(
        ', '
      )} | <span class='movie-year'>${releaseDate}</span> <span class='movie-rating'>${voteAverageFixed}</span></p>
    </div>
  </li>
	`;

  // console.log(markUp);
  return markUp;
}
