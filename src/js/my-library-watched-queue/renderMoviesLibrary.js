import emptyphoto from '../../images/empty-photo/empty-poster.jpg';
// import TmdbAPI from '../TMDB_API';

const IMG_PATH = 'https://image.tmdb.org/t/p/original';

export function renderMoviesLibrary(movie) {
  const { poster_path, title, genres, release_date, vote_average, movie_id } =
    movie;
  let poster = `${IMG_PATH}${poster_path}`;
  let releaseDate = `${release_date.slice(0, 4)}`;
  console.log(movie_id);
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
	<li class='trending-gallery__item' data-id='${movie_id}'>
    <img src="${poster}" alt="The poster of ${title} film" class="library-gallery__image" data-id='${movie_id}'/>
    <div class="trending-gallery__wrapper">
    	<h3 class='trending-gallery__title' data-id='${movie_id}'>${title}</h3>
    	<p class='trending-gallery__info'>${genres.join(
        ', '
      )} | <span class='movie-year'>${releaseDate}</span> <span class='movie-rating'>${voteAverageFixed}</span></p>
    </div>
  </li>
	`;

  // console.log(markUp);
  return markUp;
}
