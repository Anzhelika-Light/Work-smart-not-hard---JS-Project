import emptyphoto from '../../images/empty-photo/empty-poster.jpg';
// import TmdbAPI from '../TMDB_API';

const IMG_PATH = 'https://image.tmdb.org/t/p/original';

export function renderMoviesLibrary(movie) {
  const {
    poster_path,
    title,
    genre_ids,
    release_date,
    vote_average,
    movie_id,
  } = movie;
  let poster = `${IMG_PATH}${poster_path}`;

  let releaseDate = `${release_date.slice(0, 4)}`;

  // якщо немає постера

  if (poster_path || testImage(poster)) {
    poster = `${IMG_PATH}${poster_path}`;
  } else {
    poster = `${emptyphoto}`;
  }

  // якщо немає дати випуску
  if (!release_date) {
    releaseDate = `-`;
  }

  const voteAverageToNumber = Number(vote_average);
  const voteAverageFixed = voteAverageToNumber.toFixed(1);
  // const genres = genre_ids.map(el => el.id);

  const markUp = `
	<li class='trending-gallery__item' data-id='${movie_id}'>
    <img src="${poster}" alt="The poster of ${title} film" class="library-gallery__image" data-id='${movie_id}'/>
    <div class="trending-gallery__wrapper">
    	<h3 class='trending-gallery__title' data-id='${movie_id}'><span class="title-modal-open">${title}</span></h3>
    	<p class='trending-gallery__info'>${genre_ids} | <span class='movie-year'>${releaseDate}</span> <span class='movie-rating'>${voteAverageFixed}</span></p>
    </div>
  </li>
	`;

  return markUp;
}

// -----------test
function testImage(poster) {
  let tester = new Image();
  tester.addEventListener('load', () => true);
  tester.addEventListener('error', () => false);
  tester.src = poster;
}
// -----------test
